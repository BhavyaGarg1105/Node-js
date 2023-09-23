const url = require('node:url');

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
myURL.port = '3000';

console.log(myURL);
console.log(myURL.href);