// Add SCSS styles
const css = require('../style.scss');


$('body').append('<div>Hello</div>');

setTimeout(() => {
  $('body').append('<div>Hello World!</div>');
}, 7000);