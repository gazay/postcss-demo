# Postcss Demo

> Gulp application for checking all [PostCSS] plugins functionality

Right now implemented plugins:

* [postcss-color-function] - by @MoOx
* [postcss-color-grey] - by @shinnn
* [postcss-color-hex-alpha] - by @MoOx
* [postcss-color-hwb] - by @MoOx
* [postcss-color-rebeccapurple] - by @MoOx

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
