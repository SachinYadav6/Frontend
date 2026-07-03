let number = [10, 20, 30, 40, 50];
number.forEach((num) => {
    console.log(num);
    
})


function namumberprint(num) {
    console.log(num);
    
}
const num = number.forEach(namumberprint);


let num1 = [20, 30, 50, 60, 69];
num1.forEach((Element, index, array) => {
    console.log(` element is:${Element},index is:${index}and array is: ${array}`);
    
});


let Number = [12, 4, 6, 8, 9];
const numbersquare = Number.map((num) => (num ** 2)).map((num) => (number % 10===1)).filter((num) => (num <=4));
console.log(numbersquare);

let square = Number.map((num) => (num ** 2));
console.log(square);

let numbersum = [23, 45, 67, 89];
const totalsum = numbersum.reduce((acc, currval) => (acc + currval), 0);
console.log(totalsum);


let evennumber = [2, 4, 6, 8, 8];

const findevennumber = evennumber.every((num) => (num % 2 === 0));
console.log(findevennumber);

const findoddnumber = evennumber.every((num) => (num % 2 === 1));
console.log(findoddnumber);

let n = [2, 3, 7, 8, 6]

const find_evennumbers= n.some((num) => (num % 2 === 0));
console.log(find_evennumbers);

const find_oddnumber = n.some((num) => (num % 2 === 1));
console.log(find_oddnumber);



