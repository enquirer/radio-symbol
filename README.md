# radio-symbol [![NPM version](https://badge.fury.io/js/radio-symbol.svg)](https://npmjs.org/package/radio-symbol) [![Build Status](https://travis-ci.org/jonschlinkert/radio-symbol.svg?branch=master)](https://travis-ci.org/jonschlinkert/radio-symbol)

> Unicode radio symbol.

## Installation

```sh
$ npm install --save radio-symbol
```

## Usage

```js
var radio = require('radio-symbol');
console.log(radio.on);
//=> '◉'

console.log(radio.off);
//=> '◯'
```

**Windows**

```js
console.log(radio.on);
//=> '(*)'

console.log(radio.off);
//=> '( )'
```

## License

Released under the MIT license. © [Jon Schlinkert](https://github.com/jonschlinkert)
