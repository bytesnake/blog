+++
title = "Embroidering Notes with Annotated Links"
date = "2026-09-06"
+++

Annotated links are a feature I recently added to ZTL. Though a small addition,
it already made my note writing much more satisfying. Similar to footnotes
(appended to an excerpt), they are attached to an outgoing link. But better
they can be collected at the referenced target and hence provides super useful
context, when looking through incoming links or bibliography.

<!-- more -->

The well-known syntax for Markdown footnotes is `[^1]:
Footnote description`. The lesser known syntax for defining
links outside of text is

```md
Newts are a fascinating species, alternating between 
[aquatic and terrestrial] habbits. <...>

[aquatic and terrestrial]: https://... "Also called
semiaquatic"
```

The reading flow for plain-text is much better, when moving
all definitions to the end. This has two shortcomings
though. First, the title quoted after the link has to be
plaintext (no MD supported), and cannot be mutli-line.
Second, transforming an inline link to an externally defined
one, is quite involved.

For ZTL I recently added a feature, supported by `<Tab>`
key. If the cursor stays in the span of a link or LinkFoot,
then we toggle to the other when pressing `<Tab>`. When the
current link is actually _inline_, it gets expanded into an
annotated link.

To support multi-line annotation I extended the Markdown syntax
such that the link definition can be followed by a blockquote to
define the annotation content.

Perhaps best seen and understood from a simple example

<div id="ascii-jj-describe"></div>
<script>
  AsciinemaPlayer.create(
    "/annotated-links/example.ascii",
    document.getElementById("ascii-jj-describe"),
    {
      idleTimeLimit: 0.5,
      poster: 'npt:0:11',
      startAt: 0,
      terminalLineHeight: 1.3,
      terminalFontFamily: "'JetBrainsMono Nerd Font', monospace"
    },
  );
</script>

That is all, a quick and simple extension to taking notes. Allowing
much better embroidery, also for the targets as we collected all annotations.

<!-- vim : set tw=60 :-->
