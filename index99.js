let books = [{
    title: 'bookone',
    genre: 'fiction',
    publish: 1981,
    edtion: 2003
}, {
    title: 'bookone',
    genre: 'history',
    publish: 1981,
    edtion: 2004
}, {
    title: 'booktwo',
    genre: 'history',
    publish: 1981,
    edtion: 2007
}, {
    title: 'bookthree',
    genre: ' non-fiction',
    publish: 1981,
    edtion: 2000
}, {
    title: 'bookfour',
    genre: 'non-fiction',
    publish: 1981,
    edtion: 2004
}, {
    title: 'bookfive',
    genre: 'fiction',
    publish: 1980,
    edtion: 8
}, {
    title: 'booksix',
    genre: 'fiction',
    publish: 1981,
    edtion: 2004
}, {
    title: 'bookseven',
    genre: 'fiction',
    publish: 1992,
    edtion: 2009
    }];
console.log(books);
const userbooks = books.filter((bk)=>(bk.publish === 1992 && bk.edtion === 2009));
console.log(userbooks);

