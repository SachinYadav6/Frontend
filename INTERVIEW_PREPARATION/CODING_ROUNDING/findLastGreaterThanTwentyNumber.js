const nums = [12, 25, 7, 31, 18, 42, 9, 27];
let lastmaxt = null;
for (let i = 0; i < nums.length; i++){
    if (nums[i] > 20) {
        lastmaxt = nums[i];
    }
}
console.log(lastmaxt);
