/* find the maximum number of  array*/

let number = [20, 60, 3, 45, 68, 98];

let max = number.reduce((acc, curval) => {
    if (curval > acc) {
        return curval;
    } else {
        return acc;
    }

}, 0);
console.log(max);

/* fin minimum number*/ 
let num = [23, 45, 67, 89, 3, 5];
let min = num.reduce((acc, currvalue) => {
    /* if (currvalue < acc) {
    return currvalue;
}

return acc;*/
    
    if (acc < currvalue) {
        return acc;
    } else {
        return currvalue;
    }
    
}, num[0]);
console.log(min);
