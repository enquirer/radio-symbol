'use strict';

require('mocha');
var isWindows = require('is-windows');
var assert = require('assert');
var green = require('ansi-green');
var gray = require('ansi-gray');
var radio = require('./');

describe('radio-symbol', function() {
  it('should export an object', function() {
    assert(radio);
    assert.equal(typeof radio, 'object');
  });

  it('should export radio symbols', function() {
    if (isWindows()) {
      assert.equal(radio.on, green('(*)'));
      assert.equal(radio.off, '( )');
      assert.equal(radio.disabled, gray('(x)'));
    } else {
      assert.equal(radio.on, green('◉'));
      assert.equal(radio.off, '◯');
      assert.equal(radio.disabled, gray('ⓧ'));
    }
  });
});
