const nums = [34, 12, 56, 7, 89, 23];
let min = nums[0];
for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
        min = nums[i];
    }
    
}
console.log(min);
