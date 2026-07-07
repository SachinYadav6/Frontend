let number = [20, 34, 56, 78, 90];
number.forEach(function num(num) {
    console.log(num);
    
});
let n1=[2,44,6,78,90,34,67,89]
let even = n1.filter((n) => {
    return n%2===0;
});
console.log(even);

let numbers = [1, 2, 3, 4, 5, 6];
let oddnumbers = numbers.filter((oddnumber) => {
    return oddnumber % 2 === 1;
});
console.log(oddnumbers);


let numberGreaterThan10 = [5, 10, 15, 20, 25];
const greaterthan10numberfind = numberGreaterThan10.filter((greaterthan1o) => {
    return greaterthan1o >10;
});
console.log(greaterthan10numberfind);


let  negativenumber = [-5, 2, -1, 8, -9];
const negativenumberfind = negativenumber.filter((negativenum) => {
    return negativenum<0;
});
console.log(negativenumberfind);
