/* str='this is sachin kumar ;
har ek fiirst char ko str me convert krna hai ok
hint :--- 
split() → String ko Array banata hai 
join() → Array ko String banata hai 
*/
let str = 'this is sachin kumar';
let splitarray = str.split(" ");
console.log(splitarray);
let charatstring = splitarray.map((char) => {
    console.log(char);
    
    return char.charAt(0).toUpperCase() + char.slice(1);
});
console.log(charatstring);
let join = charatstring.join(" ");
console.log(join);


let str1 = "THIS IS SACHIN KUMAR";
let arrstring = str1.split(" ");
console.log(arrstring);
let joinarray = arrstring.join(' ');
console.log(joinarray);
let lowerCaseConvertString = joinarray.toLowerCase();
console.log(lowerCaseConvertString);




