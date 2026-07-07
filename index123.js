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

const totalCarPrice = product
    .filter(item => item.name === "car")
    .reduce((acc, item) => acc + item.price, 0);

console.log(totalCarPrice);   
