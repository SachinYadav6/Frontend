const nums = [7, 9, 13, 8, 20, 6];
let find = null;
for (let i = 0; i < nums.length;i++
){
    if (nums[i] % 2 === 0) {
        find = nums[i];
        break;
    }
}
console.log(find);
