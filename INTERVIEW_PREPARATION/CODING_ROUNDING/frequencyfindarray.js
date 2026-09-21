const nums = [4, 7, 4, 2, 7, 9, 2, 4];;
let taget = nums[0];
let count = 0;
for (let i = 0; i < nums.length; i++){
    if (nums[i] === taget) {
        count++;
        
    }
}
console.log(count);
