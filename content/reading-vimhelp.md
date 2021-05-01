+++
title = "Reading the vim help files"
date = "2021-03-28"

[taxonomies]
tags = ["vim"]
+++

I thought that I should improve my vim skills this morning and started by reading the vim help pages. I skimmed them in the past a couple of times, but actually learned most of the keys by doing.

<!-- more -->

My motivation was improving the `gf` command, which automatically opens the file under the cursor in a new buffer. Normally this fails if the file does not exists, but can be remapped with `noremap gf :e <cfile><cr>`. I then tried to create a group for auto-creating a subfolder where the current buffer path points and found the following snippets:
```vim
" create mkdir group and bind :M to it
augroup Mkdir
  autocmd!
  autocmd BufWritePre * call mkdir(expand("<afile>:p:h"), "p")
augroup END

command M call mkdir(expand("%:p:h"), "p")
```

This works with `:M` now, but I can't combine it by doing `:Me <cfile><cr>` :confused: I then thought that I need to learn more of vim and am looking now at the help pages. Looking at the page [vimhelp/usr_02.txt.html](https://vimhelp.org/usr_02.txt.html#usr_02.txt) shows a really insightful and useful way of teaching.

This is a simp!!!
## Learned modifiers

 * use `J` to join the current and next line
 * replace last character with combination `$ x a`, different to what I'm used to by doing `A <backspace>`
 * use `~` to change the case of a character and move to the next one

### Using counts

I used counts before for search with `f`/`F`, but you can actually use it for navigating and repeating written stuff as well.

You can use `9A !<ESC>` to write nine times the exclamation mark at the end of the line.
You can use `3o Repeat<ESC>` to create three lines with "Repeat" written
You can navigate to the third line under the cursor with `3j`
You can jump to the end of the third line with `3$`

The cool thing about the last discovery is that I can use that in my web-browser as well, because I'm using a vim plugin xD

### Forward search for matching pair

The `%` modifier will search for the matching pair of a bracket. For example a expression like `(a == (b * c) / d)` will cause `%` under the first character to jump the last character, which is the matching pair :)

This is especially useful in visual mode to select everything between brackets.

## Navigating

I previously used `:35` to jump into the 35th line, but with counts you I can also just do `35G`

Relative jumps may also become handy if you are seeing a line at the beginning and you want to jump there, you can do:
 * `H` for jumping at the beginning of the page
 * `M` for jumping to the middle
 * `L` for jumping to the end

If you doing jumps in the text, you can reverse those jumps with `CTRL-O` or repeat them with `CTRL-I`. The latter on does not work in my configuration and I have no clue why :D

### Centering the current line

You can bring the current line to the top, middle or bottom of the screen with `zt`, `zz`, `zb`. During presentation or showing someone something inside of vim, it may be useful to hide unrelevant information above the current section.

### Using marks

Marks are a special syntax for remembering up to 26 (a-z) sections in your text. You can set a mark "a" with `ma` and then jump to the line with `'a`. With `''` you can jump to the last line, which is just a special mark "'" you can see in the whole list at `:marks`

The special marks are:
 * "'": The cursor position before doing a jump
 * """: The cursor position when last editing the file
 * "[": Start of the last change
 * "]": End of the last change

## Searching

 * use `\<` and `\>` to mark the end of a word during searching
 * use `#` to search *backward* for the current word under the cursor

## Buffers

 * you can fast switch between open buffers with `CTRL 6`

Another useful thing for buffers is the use of automatically splitting when
open a new buffer. By prepending `s` before a buffer command a new split is
automatically created. Other commands I didn't know:

 * use `:bf` to jump to first buffer
 * use `:bl` to jump to last buffer
 * use `:ba` to open all buffers in splitted screens
 * use `:ls` to list all buffer, e.g. unlisted ones too

Let say you want to filter you buffer list for a specific file name, then
you can use:
```
:filter juggle ls
```

to filter for all files with the `juggle` pattern.

## Folding

You can collapse items with the operator `zf`. It accepts paragraphs, lines and words.

 * `zf`: create a new fold at that position
 * `zo`: open the fold
 * `zc`: close the fold
 * `zr`: reduce the folding
 * `zm`: more folding
 * `zd`: delete folding

To store and re-load the folds, use `:mkview` and `:loadview`
