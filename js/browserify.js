var $ = require('jquery');
var button = require('./browserifyexports.js');

$('body').append(button);
console.log('Watchify run');