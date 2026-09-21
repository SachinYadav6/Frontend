const nums = [12, 45, 7, 89, 34, 56];
let max = nums[0];
for (let i = 1; i < nums.length; i++){
    if (nums[i] > max) {
        max = nums[i];
    }
}
    console.log(max);
    