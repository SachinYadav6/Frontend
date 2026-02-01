let arraymeConvertString = ' this is a paragragh ';
let stringconvert = arraymeConvertString.trim().toUpperCase().split("");
console.log(stringconvert);

let pop = stringconvert.pop();
console.log();
let push = stringconvert.push('sachin kumar ', 56, 67, 89);
console.log(push);

let lengthfind = stringconvert.length;
console.log(lengthfind);

let slice = stringconvert.slice(0,3);
console.log(slice);

let splice = stringconvert.splice(2, 3, "kavitabhabhi", 'anjali');
console.log(splice);


console.log(stringconvert);

console.log(arraymeConvertString);


let shift = stringconvert.shift();
console.log(shift);

let unshift = stringconvert.unshift('pradeep kumar', 'sonu kumar', 'arvind');
console.log(unshift);

console.log(stringconvert);
