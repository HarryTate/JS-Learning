var $ = require('jquery');
var button = $('<button/>').html('click me').on('click', function(){
    alert('hi');
});

module.exports = button;

