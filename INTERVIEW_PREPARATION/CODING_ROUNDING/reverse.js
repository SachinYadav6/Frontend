const nums = [10, 20, 30, 40, 50];

let left =0;
let right = nums.length - 1;
while (left<right) {
    // reverse array
   let  temp = nums[left];
    nums[left] = nums[right]
    nums[right] = temp;
    left++;
    right--;
    
}
for (let j = 0; j < nums.length; j++){
    console.log(nums[j]);
    
}