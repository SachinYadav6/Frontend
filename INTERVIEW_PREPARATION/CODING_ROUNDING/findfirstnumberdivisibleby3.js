const nums = [7, 10, 14, 9, 18, 21];
let first = 0;
for (let i = 0; i < nums.length; i++){
    if (nums[i]%3===0) {
        first = nums[i];
        break;
    }
}
console.log(first);
