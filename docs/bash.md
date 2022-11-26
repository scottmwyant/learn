<img class="logo" src="https://user-images.githubusercontent.com/29161635/97378317-7b708780-1898-11eb-9b68-96ad0c62b162.png" width="100px" height="100px">

# Bash

The 'Born Again Shell'.  This page is not intended to be a history lesson, but it is helpful to understand the lineage of this particular piece of software.  If you don't do any further reading on the topic, just realize that many systems now use 'dash', which is of course related, but not identical software.  This is complicated by the fact that many systems will use a login shell of `/usr/bin/bash` which is often not a binary executable itself, but a symlink to `/usr/bin/dash`, so you may be using `dash` without even realizing it. 

## Official resources

- [Bash Reference Manual (html)](https://www.gnu.org/software/bash/manual/bash.html)

## Terminal shortcuts

|Shortcut|Description|
|---|---|
|`ctrl+a`|Move cursor to the beginning of the line.|
|`ctrl+e`|Move cursor to the end of the line.|
|`ctrl+c`|Kill the current process.|
|`ctrl+r`|Search history based on entered keywords.|
|`ctrl+u`|Delete the current line.|
|`ctrl+k`|Delete the text at the right side of the cursor.|
|`ctrl+w`|Delete the text before the cursor.|
|`ctrl+l`|Clear the output of terminal commands.|
|`alt+f`|Move the cursor forward one word.|
|`alt+b`|Move the cursor backware one word.|
|<letter><tab><tab>|Enter a letter then hit `tab` twice to list all commands beginning with that letter.|

## Third party resources

- https://repl.it/languages/bash#main.sh
