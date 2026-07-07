const shoopingcard = [{
    itemname: 'js course',
    price: 3000
},
{
    itemname: 'js course',
    price: 3000
},
{
    itemname: 'js course',
    price: 3000
},
{
    itemname: 'js course',
    price: 3000
},
{
    itemname: 'js course',
    price: 3000
}
];

const costprice = shoopingcard.reduce((acc,item) => (acc + item.price), 0);
console.log(costprice);
