/* q 1*/ 
let num = [2, 3, 4, 5, 6];
let square = num.map(n => n ** 2);
console.log(square);

let n = [23, 45, 677, 89];
let element = n.forEach((ele, index, array) => {
    console.log(`element print:${ele},$index is:{index},array of given array:${array}`);
    
});
console.log(element);
