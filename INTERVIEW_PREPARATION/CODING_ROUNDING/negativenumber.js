const nums = [-5, 12, -8, 20, 0, -3, 15];
let count = 0;
for (let i = 0; i < nums.length; i++){
    if (nums[i] < 0) {
        count++;
    }
}
console.log(count);
