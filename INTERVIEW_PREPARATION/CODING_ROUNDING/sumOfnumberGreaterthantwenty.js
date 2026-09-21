const nums = [12, 25, 7, 31, 18, 42, 9, 27];
let sum = 0;
for (let i = 0; i < nums.length; i++){
    if (nums[i] > 20) {
        sum += nums[i];
        
    }
}
console.log(sum);
