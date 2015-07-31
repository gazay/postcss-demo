# Postcss Demo

> Gulp application for checking all [PostCSS] plugins functionality

Right now implemented plugins:

* [postcss-color-function](https://github.com/postcss/postcss-color-function) - by [@MoOx](https://github.com/MoOx)
* [postcss-color-grey](https://github.com/postcss/postcss-color-grey) - by [@shinnn](https://github.com/shinnn)
* [postcss-color-hex-alpha](https://github.com/postcss/postcss-color-hex-alpha) - by [@MoOx](https://github.com/MoOx)
* [postcss-color-hwb](https://github.com/postcss/postcss-color-hwb) - by [@MoOx](https://github.com/MoOx)
* [postcss-color-rebeccapurple](https://github.com/postcss/postcss-color-rebeccapurple) - by [@MoOx](https://github.com/MoOx)

## Usage

```bash
$ git clone https://github.com/gazay/postcss-demo
$ cd postcss-demo
$ npm install
$ node_modules/.bin/gulp build

$ open index.html
```

## Idea

With this application you can see how plugins work and how and for what you can use them.
Every plugin is in different folder and have it's own gulp task to run.
