
let num = [1, 3, 5, 8, 90];
/* filter method*/ 
let even = num.filter((num) => {
    return num % 2 === 0;
})
console.log(even);

let product = [{
    name: 'thar',
    module: 'mahendra',
    price: '5500000',
},
{
    name: 'truck',
    module: 'mahendra',
    price: '1450000',
}, {

},
    
{
    name: 'car',
    module: 'mahendra',
    price: '5500000',
},
{
    name: 'thar',
    module: 'mahendra',
    price: '5500000',
},
{
    name: 'car',
    module: 'mahendra',
    price: '5500000',
},
{
    name: 'truck',
    module: 'mahendra',
    price: '5500000',
},
{
    name: 'scarpio',
    module: 'mahendra',
    price: '16000000',
}
];

/* filter method*/ 

let carProduct = product.filter((items) => {
    return items.name === 'car' && items.price === '5500000';
});
console.log(carProduct);



/* product 2*/
/* reduce method*/
let product2 = [{
    
    name: 'thar',
    module: 'mahendra',
    price: 5500000,
},
{
    name: 'truck',
    module: 'mahendra',
    price: 1450000,
}, {

},

{
    name: 'car',
    module: 'mahendra',
    price: 5500000,
},
{
    name: 'thar',
    module: 'mahendra',
    price: 5500000,
},
{
    name: 'car',
    module: 'mahendra',
    price: 5500000,
},
{
    name: 'truck',
    module: 'mahendra',
    price: 5500000,
},
{
    name: 'scarpio',
    module: 'mahendra',
    price: 16000000,
}
];
let total_price_car = product2.reduce((acc, items) => {
    if(items.name === 'car') {
        return acc + items.price;
    }
    
        return acc;
    
}, 0);
console.log(total_price_car);
