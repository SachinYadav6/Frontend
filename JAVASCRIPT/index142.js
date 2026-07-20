const { log } = require("node:console");

/* q1
Array ka sum nikalo.
[10, 20, 30, 40]
 */
let arr = [10, 20, 30];
let sum = arr.reduce((acc,currval) => {
    return acc + currval;
}, 0)
console.log(sum);

/*String ko reverse karo. 
"hello"
*/
let str = "hello";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}

console.log(reverse);

let reverse1=""
for (let i = 10; i >= 0; i--) {
    reverse1 = reverse1 + [i];
    
    

    
}
console.log(reverse1);


/* console.log([] + []);*/ 

console.log([] + []);
console.log([] + {});
console.log({} + []);