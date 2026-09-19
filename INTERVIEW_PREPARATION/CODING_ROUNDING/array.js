const nums = [2, 5, 8, 11, 14, 17, 20];
const evenumber = nums.filter((n) => {
    return n %2!= 1;
})
console.log(evenumber);

// inteview perpas se
let even = nums.filter((n) => n % 2 === 0);
console.log(even);
