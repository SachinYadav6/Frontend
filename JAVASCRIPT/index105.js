let number = [10,20,30,31,45,60, 3, 5, 7, 9];
const oddnumber = number.filter((num) => (num % 2 === 1));
console.log(oddnumber);

let evennumber = number.forEach((index) => {
    console.log(index);
    
});

const total = number.reduce((acc, currval) => {
    return acc + currval;

}, 0);

console.log(total);

