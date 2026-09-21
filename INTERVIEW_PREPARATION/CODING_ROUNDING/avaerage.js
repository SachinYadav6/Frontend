const nums = [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}

let average = sum / nums.length;

console.log(average);