const nums = [4, 7, 4, 2, 7, 9, 2, 4];
let visited = [];
for (let i = 0; i < nums.length; i++){
   
   
    if (visited.includes(nums[i])) {
        continue;
    }
   
    let count = 0;
    for (let j = 0; j < nums.length; j++){
        if (nums[i] === nums[j]) {
            count++;
            
            
        }
       
        
    }
    console.log(nums[i], "--->" + count);
    visited.push(nums[i]);
}
console.log(visited);
