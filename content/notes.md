+++
title = "Some notes on scientific notetaking"
date = "2023-12-18"
draft = true
+++

For my PhD studies my daily occupation shifted towards more connected work &ndash; opposed to the curriculum based master's studies. Reading large amount of literature became much more important without forgetting most of it after a month or two. Therefore I looked for a good solution for scientific note-taking.

<!-- more -->

### Comments on my background

I think that efficient note-taking is a very personal process and no general
framework is productive for others. Anecdote sharing can still be useful 
though when put into practice.

**writing process** &ensp; I'm an avid Vim user and write all of my scientific documents 
with `vim-tex` to typeset LaTeX formulae and manage my bibliography with
hyperlinks to documents. Without modal editing and the excellent rendering 
support of TeX documents in realtime, my writing process would be much more
distracting. 

**deconstruction process** &ensp; My memory is really bad at retaining information
without context. To put new material into context in the first place, I need to
re-express things in my own words and iterate that process several times.
Further writing notes with fountain pen on real paper still works best to slow
things down, think prolonged about a problem and flatten the forgetting curve by
a bit. To facilitate this I need to read my notes anywhere best on smartphone without
getting distracted by other closely related activities on my computer.

**content** &ensp; Most of my content are either mathematical notes (e.g.
theorems, examples, definitions, proof sketchs) or reading guides for literature
for my later self. Typesetting TeX formulae with macro support and bibtex
support with hyperlinking to named destinations in PDF documents are at the
heart of content creation process. Further the content is often strongly 
connected making [Folgezettel](https://zettelkasten.de/folgezettel/) useful.

To summarize and anticipate the following, the best I came up with is writing in
LaTeX in condensed style, rendering to HTML5 with MathML (not MathJax) and
publishing notes to a special Mastodon instance. That gives the flexibility of
the writing process, while making reading notes really hassle free.

 * typeset LaTeX formulae with macro support
 * support bibliography in established bibtex format
 * create rich network of hyperlinks with support of Folgezettel (linear follow-up notes)
 * publish notes in a suitable format to read on the web

## Connected Notetaking in LaTeX

I have been using LaTeX for a long time now and can't live with many features of its core and CTAN packages.

## Converting to HTML with Tex4HT

As preliminary step towards the next section, we convert our TeX document to an HTML5 file. Formulae support with MathML is mandatory, as we can't use javascript libraries such as MathJax.

## Publish to Mastodon for Reading and Sharing

To publish our notes to the wider federated internet, I wrote a small script decomposing the HTML and creating atomic notes.

Any microblogging platform may be used, but I opted for Mastodon as its the most popular one, has good application support and can be easily hosted (to allow for longer posts). In context of Zettelkasten, we use hashtags as note identifiers and replies as follow-up notes. That is enough to support networked thinking and suits my case.


