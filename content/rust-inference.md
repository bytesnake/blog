+++
title = "Building standalone model binaries for audio inference"
date = "2024-08-10"
+++

For a recent problem I had to crawl and categorize
a large number of audio files from the internet.
As the bottleneck was deemed to be downstream link
I decided to use a pre-trained event
classification model and run inference on the CPU.

Another requirement was that the crawler were
running on multiple server and consistent for
several weeks. My choice of language for such
infrastructure heavy task is Rust and I looked
into ways how to deploy an inference model.

It turned out that the process for creating a
standalone binary in Rust is pretty simple. Even
better, wrapping a model pre-trained on a large
event classification dataset is possible.
This means that in the end I could just copy the
binary to any x86 machines and run them, without
the need to setup virtual environments or install 
any packages.

In this post I will demonstrate how to convert a
pre-trained model to ONNX and put it into a
binary. Our goal is to create a standalone
executable taking samples from stdin and
classifying them into 527 known audio classes.

<!-- more -->

## ONNX and audio pattern recognition

The Open Neural Network Exchange (ONNX) is an open 
standard for machine learning interoperability. It
provides the definitions to export the compute
graph of a machine learning model and consumer can
implement the main operators for a specific
architecture.

In our case we the excellent [EfficientAT](https://github.com/fschmid56/EfficientAT) model, pre-trained
on AudioSet and compressed into smaller CNN
architectures. Exporting a model to an ONNX file
is simple enough.

We first load the model `mn10_as` with acceptable
performance

```python
from hear_mn import mn01_all_b_mel_avgs
from hear_mn.helpers.utils import NAME_TO_WIDTH
from hear_mn.models.MobileNetV3 import get_model

mn10_as = get_model(width_mult=NAME_TO_WIDTH("mn10_as"), pretrained_name="mn10_as",
                    collect_component_ids=tuple(list(range(16)))).cuda()
```

and then use the ONNX export of PyTorch to save
our compute graph to `efficientat.onnx`:
```python
torch.onnx.export(wrapper, torch_input, "efficientat.onnx", \
        input_names = ["melspec"], output_names = ["logits"], \
        dynamic_axes = { \
            "melspec": {0: "batch_size", 3: "time_axis"}, \
            "logits": {0: "batch_size" }})
```

This attributes `melspec` to the input of mel
spectrogram features and `logits` for our 527
logits we use for classification. It further
defines two dynamic axis to vary the number of
batches and frames for inference (number of
channels and features are fixed though and 
correspond to mel filterbanks).

## Standalone inference

With the exported model we can hop to a new Rust
binary and install the x86_64 MUSL toolchain.

```bash
$ cargo new --bin audio-inference
$ rustup target install x86_64-unknown-linux-musl
```

To actually load our ONNX model for inference we
use the excellent [tract](https://github.com/sonos/tract) crate provided by Sonos.

```bash
cargo add tract @ 0.21
```

and do a test load of our ONNX model:

```rust
fn main() {
    let mut model_cursor = Cursor::new(include_bytes!("../efficientat.onnx"));
    let model = tract_onnx::onnx()
        .model_for_read(&mut model_cursor).unwrap()
        .into_runnable().unwrap();

    dbg!(&model);
}
```

We then compile with the MUSL target

```bash
$ cargo build --release --target x86_64-unknown-linux-musl
```

and, voila, have a standalone binary without any
dependencies

```bash
$ ldd ./target/x86_64-unknown-linux-musl/release/audio-inference
	statically linked
```

## Feeding and Filterbank

The remaining part is mainly diligence work. We
need to implement a Mel filterbank producing same
features as the PyTorch implementation and feed it
to our model.

To match the same implementation, I first export
the Mel filterbank and STFT windows from PyTorch
to `npy` files.

Then I implement a struct which first performs the
STFT with our custom window and then converts the
complex frequency coefficients into a Mel features
with our custom filterbank.

```rust
pub struct Features {
    // ..
}

impl Features {
    // ..

    pub fn preprocess(&mut self, inp: &[f32]) -> Array2<f32> {
        // apply pre-emphasize filter
        // ..

        // center with reflect mode
        // ..

        // calculate power of each frequency bin
        let spec = self.stft2(samples.view());
        let spec = spec.mapv(|x| x.norm().powf(2.0));

        // project to log-space, normalized, mel coefficients
        self.fbank.dot(&spec.t()).mapv(|x| (x+0.00001).ln()).mapv(|x| (x + 4.5) / 5.)
    }
```

For the full implementation take a look [here](github.com/bytesnake/).

## Improve memory allocation performance characteristics

I found that the model performed poorly for the
MUSL target. My immediate suspect was the memory
allocator and indeed the [malloc implementation](https://www.tweag.io/blog/2023-08-10-rust-static-link-with-mimalloc/)
of MUSL can be pretty slow.

Instead I added the [mimalloc](https://github.com/microsoft/mimalloc) allocator by Microsoft
to my project

```bash
cargo add mimalloc
```

and register it at the top of my main file

```rust
use mimalloc::MiMalloc;

#[global_allocator]
static GLOBAL: MiMalloc = MiMalloc;
```
and the performance problems were gone.

## Putting it all together

What remains to be done? We need to read samples
from some input stream and associate the resulting
logits to pre-defined classes of our model.

As the dataset is multi-label I just sort them by
their evidence and print the top 10 classes for
the input.

Add the [hound](https://github.com/ruuda/hound) crate for reading WAV files to `f32` 
vectors 

```bash
cargo add hound
```

and combine with our feature extractor and model

```rust
// load audio file and convert to mel features
let mut reader = hound::WavReader::open(&env::argv[1]).unwrap();
let samples = reader.samples::<f32>().collect::<Vec<_>>();
let features = Feature::new(1024 /* FFT size */, 800 /* window size */, 320 /* overlap */)
    .preprocess(&samples);

// perform inference with ONNX model
let input: Tensor = features.into();
let nframes = features.shape()[1];
let features = features.into_shape(&[1, 1, 128, nframes]).unwrap();
let result = model.run(tvec!(features.into())).unwrap();

// get logits from output
let res = result[result.len() - 2].to_array_view::<f32>().unwrap();
```

