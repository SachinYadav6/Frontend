let arr = [12, 45, 7, 89, 23, 56];
let largenumber = arr.reduce((acc, culva) => {
    if (culva>acc) {
        return culva
    }
    else {
        return acc;
    }
    
}, arr[0]);
console.log(largenumber);


/* String me kitne vowels (a, e, i, o, u) hain, count karo.*/

let str = "javascript";
let count = 0;
for (let i = 0; i < str.length; i++){
    if (
        str[i] === 'a' ||
        str[i] === 'e' ||
        str[i] === 'i' ||
        str[i] === 'o' ||
        str[i]==='u'
    ){
        count++
    }
    
}
console.log(count);


let r = [2, 4, 6, 8, 10];
const mutilple = r.reduce((a, c) => {
    return a * c;
}, 1);
console.log(mutilple);

/* reduce() ka use karke array me sirf even numbers ka sum nikalo.*/

let array = [5, 10, 15, 20, 25, 30];

const sum = array.reduce((acc, curval) => {
    
   
    if (curval % 2 === 1) {
        return curval+acc;
       
    } {
        return acc;
    }
    
}, 0);
console.log(sum);
console.log('break');

/* how many even number in this given array*/
let arr1 = [2, 5, 8, 11, 14, 17, 20];

const evenNumberCount = arr1.reduce((acc, curval) => {
    if (curval % 2 === 0) {
        return acc + 1;
    } else {
        return acc;
    }
}, 0);

console.log(evenNumberCount);