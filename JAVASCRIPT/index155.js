
let arr = [10, 20, 30, 40];
console.log(arr);

let n = [4, 2, 8, 1];
n.sort((a, b) => a - b);
console.log(n); // [1,2,4,8]
console.log(n.reverse()); // [8,4,2,1]
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits.join("-"));
// Apple-Mango-Banana
let data = [1, 2, 3];
console.log(data.flatMap(x => [x, x * 2]));
// [1,2,2,4,3,6]