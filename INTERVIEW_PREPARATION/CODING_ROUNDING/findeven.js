const nums = [12, 7, 4, 19, 8, 23, 10];
let count = 0;
for (let i = 0; i < nums.length;i++){
    if (nums[i] % 2 === 0) {
        count++;
    }
}
console.log(count);
