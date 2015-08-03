# PostCSS Demo

> Gulp application for checking all [PostCSS](https://github.com/postcss/postcss) plugins functionality

Right now implemented plugins:

| Github page | Author |
| ----------- | ------ |
| [postcss-color-function](https://github.com/postcss/postcss-color-function) | [@MoOx](https://github.com/MoOx) |
| [postcss-color-grey](https://github.com/postcss/postcss-color-grey) | [@shinnn](https://github.com/shinnn) |
| [postcss-color-hex-alpha](https://github.com/postcss/postcss-color-hex-alpha) | [@MoOx](https://github.com/MoOx) |
| [postcss-color-hwb](https://github.com/postcss/postcss-color-hwb) | [@MoOx](https://github.com/MoOx) |
| [postcss-color-rebeccapurple](https://github.com/postcss/postcss-color-rebeccapurple) | [@MoOx](https://github.com/MoOx) |
| [postcss-conic-gradient](https://github.com/jonathantneal/postcss-conic-gradient) | [@jonathantneal](https://github.com/jonathantneal) |
| [postcss-color-rgba-fallback](https://github.com/postcss/postcss-color-rgba-fallback) | [@magsout](https://github.com/magsout) |
| [postcss-color-hcl](https://github.com/devgru/postcss-color-hcl) | [@devgru](https://github.com/devgru) |
| [postcss-color-alpha](https://github.com/avanes/postcss-color-alpha) | [@avanes](https://github.com/avanes) |

## Usage

To build all plugins:

```bash
$ git clone https://github.com/gazay/postcss-demo
$ cd postcss-demo
$ npm install
$ node_modules/.bin/gulp build

$ open index.html
```

To build specific plugin:

```bash
$ git clone https://github.com/gazay/postcss-demo
$ cd postcss-demo
$ npm install
$ node_modules/.bin/gulp postcss-color-function

$ open postcss-color-function/index.html
```

## Idea

With this application you can see how plugins work and how and for what you can use them.
Every plugin is in different folder and have it's own gulp task to run.

## Contributors

* @gazay

Special thanks to @ai.

## License

The MIT License
