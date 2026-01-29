let square = numbers.map(n => n * n);
console.log(square);

let even = numbers.filter(n => n % 2 === 0);
console.log(even);

let total = numbers.reduce((a, b) => a + b, 0);
console.log(total);

let hasOdd = numbers.some(n => n % 2 !== 0);
console.log(hasOdd);

let allPositive = numbers.every(n => n > 0);
console.log(allPositive);



