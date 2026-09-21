const nums = [10, 20, 10, 30, 20, 40, 10];
let unique = [];
for (let i = 0; i < nums.length; i++){
    if (!unique.includes(nums[i])) {
        unique.push(nums[i])
    }
}
console.log(unique);

/* if (!unique.includes(nums[i])) 
Agar current number unique array ke andar nahi hai, tabhi push karo
*/ 