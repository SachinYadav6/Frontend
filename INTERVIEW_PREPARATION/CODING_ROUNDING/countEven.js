const nums = [2, 7, 4, 9, 12, 15, 18];
let count = 0;
for (let i = 0; i < nums.length; i++){
    if (nums[i] % 2 === 0) {
        count++;
    }
}
console.log(count);
