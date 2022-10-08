+++
title = "Reading and writing the web with Vim"
date = "2022-10-07"
+++

Two features of the [Tridactyl](https://addons.mozilla.org/de/firefox/addon/tridactyl-vim/) extension makes reading/writing the web much more relaxing for me. The most common
element of Vim like extensions is link following with highlighted key-codes. This makes mouse pointing unecessary
and reading workflow easier. (also don't forget to use the `g<f|F>` chain) But I find the visualized style of many
websites too distracting and use Vim in those cases to construct an answer or dissect a thread.

<!-- more -->

A lesser known feature of Tridactyl is the `$EDITOR` insert mode where a custom buffer is created in the background
edit by the set editor and then input into the website. Together with a tiling window manager you can write a
prose of text, without having to look at the website during this process. This lessen mental strain for me and
let me concentrate on the actual question. I'm often use this for Github. You first have to check that the native plugin
is installed with `:native` and can apply this to any form by pressing `<Ctrl> + i` when focused on the element.

<video width="100%" controls>
  <source src="vim-write.mp4" type="video/mp4">
</video>

Reading a website in Vim is not directly supported by Tridactyl but the native messenger makes simple (yet powerful) extensions
possible. You can find a script [here](https://github.com/bytesnake/scidots/blob/main/.local/bin/stash_website) which takes a url, parses with pandoc and puts that into my stash folder
and open the file in Vim. From Tridactyl you only have to bind this script to a key:

```bash
bind ,e composite get_current_url | exclaim_quiet $HOME/.local/bin/stash_website epub
bind ,p composite get_current_url | exclaim_quiet $HOME/.local/bin/stash_website pdf
bind ,m composite get_current_url | exclaim_quiet $HOME/.local/bin/stash_website markdown
```

so that you can press `,<e|p|m|>` to generate either epub, pdf or markdown format. I'm using markdown format to
read in 95% of the time. Pruning the website, marking interesting sections and making extracts happens with the
day-to-day Vim commands.

<video width="100%" controls>
  <source src="vim-read.mp4" type="video/mp4">
</video>

That's all, have a nice and fulfilled day!
