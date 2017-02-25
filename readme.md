<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/11269635/23332321/1b25eafa-fb78-11e6-8590-3208fb934d9c.png">
</p>

## A Laravel Valet GUI

<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/11269635/23332313/e01c6894-fb77-11e6-8cbd-67e097d2cf48.png">
</p>

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

Download the most recent version from the ["Releases"](https://github.com/phppirate/attendant/releases) page and add it to your Applications folder.

Then run this is your terminal
```
ln -s /Applications/Attendant.app/Contents/Resources/app/attendant /usr/local/bin
```
Also make sure `/usr/local/bin` is in your $PATH env variable.

## Caviat

Now here is the only issue. When you want to open Attendant you need to open your terminal and type `attendant`.

That is it!
