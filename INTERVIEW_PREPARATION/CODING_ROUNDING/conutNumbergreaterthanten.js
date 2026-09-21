const nums = [5, 12, 8, 20, 15, 3, 25];
let count = 0;
for (let i = 0; i < nums.length; i++){
    if (nums[i] > 10) {
        count++;
    }
}
console.log(count);
