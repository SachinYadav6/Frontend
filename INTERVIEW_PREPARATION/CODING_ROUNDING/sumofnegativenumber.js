const nums = [-5, 10, -2, 8, 15, -7];
let sum = 0;
for (let i = 0; i < nums.length; i++){
    if (nums[i] < 0) {
        sum += nums[i];
    }
}
console.log(sum);
