const score = 400;
console.log(score);
const balance = new Number(100);
console.log(balance);
console.log(balance.toString());
console.log(typeof balance);

/* 
number convert into string
*/ 
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // decimal ke bad zero add krna kr sakte hai ok

let otherNumber = 123.8986;
console.log(otherNumber.toPrecision(4));

let hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));





