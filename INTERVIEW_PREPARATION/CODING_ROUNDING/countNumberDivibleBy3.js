const nums = [3, 7, 9, 12, 14, 18, 20, 21];
let count = 0;
for (let i = 0; i < nums.length; i++){
    if (nums[i] % 3 === 0) {
        count++;
    }
}
console.log(count);
