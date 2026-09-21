const nums = [12, 7, 24, 9, 18, 31, 20];
let max = null;
for (let i = 0;
    i < nums.length;i++
){
    if (nums[i] % 2 !== 0 && (max === null || nums[i] > max)) {
        max = nums[i];
    }
}
console.log(max);
