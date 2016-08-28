'use strict';

var isWindows = process.platform === 'win32';
module.exports = {
  on: isWindows ? '(*)' : '◉',
  off: isWindows ? '( )' : '◯',
};
