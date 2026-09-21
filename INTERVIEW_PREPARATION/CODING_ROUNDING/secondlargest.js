const nums = [10, 45, 23, 67, 34, 89, 12];
let max;
let secondmax;
if (nums[0] > nums[1]) {
    max = nums[0];
    secondmax = nums[1];

} else {
    max = nums[1];
    secondmax = nums[0];
}
for (let i = 2; i < nums.length; i++) {
    if (nums[i] > max) {
        secondmax = max;
        max = nums[i];
    }
    else if (nums[i] > secondmax) {
        secondmax =nums[i];

    }

}

console.log(secondmax);
