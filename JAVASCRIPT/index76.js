const { lastIndexOf } = require("lodash");

/* revision the string*/ 
let fullName = 'sachin';

let capitalisefullName = fullName.toUpperCase();
console.log(capitalisefullName);

let lowerfullName =
fullName.toUpperCase();
console.log(lowerfullName);


let fullnameindexof = fullName.indexOf('s');
console.log(fullnameindexof);

let lastindexof = fullName.lastIndexOf('c');
console.log(lastindexof);


let fullnamelength = fullName.length;
console.log(fullnamelength);


let trimfullName = fullName.trim();
console.log(trimfullName);

let slicefullname = fullName.slice(0, 3);
console.log(slicefullname);

let splitfullname = fullName.split('');
console.log(splitfullname);

for (let i = 0; i <= splitfullname.length; i++){
    console.log(i, splitfullname[i]);
    
    
}









