const nums = [-5, 10, -2, 8, 0, 15, -7];
let count = 0;
for (let i = 0; i < nums.length; i++){
    if (nums[i] > 0) {
        count++;
    }
}
console.log(count);
