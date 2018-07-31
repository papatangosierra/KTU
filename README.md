# KTU: Manga Tools for InDesign

## KTU?

KTU stands for "Kiyoku, Tadashiku, Utsushiku," which is the motto of the Takarazuka theatrical troupe. It translates roughly to "Clearly, Correctly, Beautifully."

## What it does

KTU is meant to automate certain tasks specific to lettering the English editions of Japanese comics.

## How to install it

Right now this is a pain in the ass. KTU was created using [this tutorial](https://medium.com/adobetech/how-to-create-your-first-adobe-panel-in-6-easy-steps-f8bd4ed5778) and [this one](https://medium.com/adobetech/debugging-your-adobe-panel-cf73f00f6961). Per the second linke, you have to enable debug mode in InDesign to let it run an unsigned extension, which this still currently is.

With debug mode enabled, put the entire KTU directory in `~/Library/Application Support/Adobe/CEP/extensions`, then relaunch InDesign. You can create the CEP directory if it's not already there.

## What doesn't work

- It might fail to run on some versions of InDesign. This is likely a manifest.xml problem that can be fixed by diddling the version requirements there.
- "Export Individual PDFs from Folder" is currently very fragile. If a user provides even minutely invalid input (anything besides a list of valid page numbers separated by exactly one space character) it will default to exporting the entire document, the interface frozen while it does so.

## TODO

- "Auto-Place Images from Folder" is unimplemented.
- "Place Page Number" is unimplemented
- "Create Translation Note" is unimplemented.
- What else in the lettering workflow could be sped up/automated?
