import url from 'url';
const myUrl = new URL('https://example.org');
myUrl.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myUrl);

console.log(myURL.href);
