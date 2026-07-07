let product = [{
    name: 'car',
    price: 23450000,
    model: 'xz'
}, {
    name: 'car',
    price: 23450000,
    model: 'xyz'
}, {
    name: 'motor cycle',
    price: 4450000,
    model: 'z'
}, {
    name: 'swift diserr',
    price: 23450000,
    model: 'y'
}, {
    name: 'car',
    price: 230050000,
    model: 'xz'
    }];
const totalcostcarprice = product.reduce((acc, items) => {
    return acc + items.price;
}, 0);
console.log(totalcostcarprice);
