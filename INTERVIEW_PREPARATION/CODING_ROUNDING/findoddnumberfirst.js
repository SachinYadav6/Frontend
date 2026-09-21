const nums = [2, 4, 8, 10, 15, 20, 25];
let find = 0;
for (let i = 0; i < nums.length; i++){
    if (nums[i] % 2 !== 0) {
        find = nums[i];
        break;
    }
}
console.log(find);
