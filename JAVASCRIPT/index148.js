let products = [
    { id: 1, name: "Laptop", price: 50000, inStock: true },
    { id: 2, name: "Mouse", price: 1000, inStock: false },
    { id: 3, name: "Keyboard", price: 2000, inStock: true },
    { id: 4, name: "Monitor", price: 12000, inStock: true },
    { id: 5, name: "Headphone", price: 3000, inStock: false }
];

let total = products
    .filter(product => product.inStock)
    .reduce((sum, product) => sum + product.price, 0);

console.log(total); // 64000


/*
let availableProducts = products.filter(product => product.inStock);


let totalPrice = availableProducts.reduce((total, product) => {
    return total + product.price;
}, 0);

console.log(availableProducts);
console.log("Total Price:", totalPrice); 
*/