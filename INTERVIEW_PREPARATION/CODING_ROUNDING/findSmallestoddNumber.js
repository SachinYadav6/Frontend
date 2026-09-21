const nums = [15, 8, 21, 4, 17, 10, 3];
let min = null;
for (let i = 0;
    i < nums.length; i++
) {
    if (nums[i] % 2 !== 0 && (min === null || nums[i] <min)) {
        min = nums[i];
    }
}
console.log(min);