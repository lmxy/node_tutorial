// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const sayHi = require('./05-utils');
const names = require('./04-names');
const data = require('./06-alternative-flavor');

require('./07-mind-grenade')
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);