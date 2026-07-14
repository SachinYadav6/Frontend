/* filter*/ 

let num = [1, 2, 3, 4, 5];

let double = num.map((item) => {
    return item * 2;
});

console.log(double);

/* method map()*/ 

let product2 = [{

    name: 'thar',
    module: 'mahendra',
    price: 5500000,
},
{
    name: 'truck',
    module: 'mahendra',
    price: 1450000,
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
let product_name_return = product2.map((items) => {
    return items.name;
});
console.log(product_name_return);
