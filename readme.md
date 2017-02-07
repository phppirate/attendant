<p align="center">
  <img src="icons/title.png">
</p>

## A Laravel Valet GUI

## Requirements

You need to have valet entirely install already.

## Currently Supports

- Listing Sites
- Showing Valet Running status
- Restarting Valet
- Stoping Valet
- Starting Valet
- Link and Unlink Directories
- Park and Forget Directories
- Opening sites in browser
- Revealing sites in finder
- Opening sites in Sublime Text using the `subl` utility

## Instalation

Download the most recent version from the "Releases" page and add it to your Applications folder.

Then run this is your terminal
```
ln -s /Applications/Attendant.app/Contents/Resources/app/attendant /usr/local/bin
```
Also make sure `/usr/local/bin` is in your $PATH env variable.

## Caviat

Now here is the only issue. When you want to open Attendant you need to open your terminal and type `attendant`.

That is it!
