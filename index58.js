/* array  method*/

let num = [90, 89, 87, 94, 87];
console.log(num);

num.forEach((n) => {
    console.log(n * n);
    
    
});
let nums=[4,5,6,7,8]
let square = nums.map((n) => {
    return n * n;
    
});
console.log(square);

let number = [1, 2, 3, 4, 5, 6, 7];

let oddnumber = number.every((n) => {
    return n % 2 == 0;
})

console.log(oddnumber);


number = [1, 2, 3, 4, 5, 6, 7];
let oddnumbers = number.some((n) => {
    return n % 2 == 0;
});

 console.log(oddnumbers);
 






