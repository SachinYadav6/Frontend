const nums = [12, 15, 7, 25, 31, 42];

let find = null;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 20) {
        find = nums[i];
        break;
    }
}

console.log(find);