/********************************
 BASIC STRING
********************************/

let str = "Hello World";
console.log("String:", str);

// Length
console.log("Length:", str.length);

// Access character
console.log("CharAt:", str[0]);

/********************************
 CASE METHODS
********************************/

console.log("UpperCase:", str.toUpperCase());
console.log("LowerCase:", str.toLowerCase());

/********************************
 SEARCH METHODS
********************************/

console.log("Includes:", str.includes("World"));
console.log("IndexOf:", str.indexOf("World"));
console.log("StartsWith:", str.startsWith("Hello"));
console.log("EndsWith:", str.endsWith("World"));

/********************************
 SLICE / SUBSTRING
********************************/

console.log("Slice:", str.slice(0, 5));
console.log("Substring:", str.substring(6, 11));

/********************************
 REPLACE
********************************/

let msg = "I love JavaScript";
console.log("Replace:", msg.replace("love", "like"));

/********************************
 TRIM
********************************/

let name = "   Sachin   ";
console.log("Trim:", name.trim());

/********************************
 SPLIT
********************************/

let line = "red,green,blue";
let colors = line.split(",");
console.log("Split:", colors);

/********************************
 CONCAT
********************************/

let a = "Hello";
let b = "User";
console.log("Concat:", a.concat(" ", b));

/********************************
 TEMPLATE LITERAL
********************************/

let age = 22;
console.log(`My age is ${age}`);

/********************************
 REPEAT
********************************/

console.log("Repeat:", a.repeat(3));

/********************************
 CHAR CODE
********************************/

console.log("CharCode:", str.charCodeAt(0));

/********************************
 STRING TO ARRAY
********************************/

let arr = Array.from(str);
console.log(arr);

/********************************
 REVERSE STRING
********************************/

let word = "Sachin";
let reversed = word.split("").reverse().join("");
console.log("Reverse:", reversed);

/********************************
 PALINDROME CHECK
********************************/

let p = "madam";
let rev = p.split("").reverse().join("");

if (p === rev) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

/********************************
 COUNT VOWELS
********************************/

function countVowels(s) {
    let count = 0;
    for (let ch of s) {
        if ("aeiou".includes(ch.toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log("Vowels:", countVowels("Javascript"));

/********************************
 REMOVE SPACES
********************************/

let text = "I am learning JS";
console.log(text.replaceAll(" ", ""));

/********************************
 STRING TO NUMBER
********************************/

let numStr = "50";
console.log(Number(numStr));

/********************************
 NUMBER TO STRING
********************************/

let n = 100;
console.log(String(n));

/********************************
 END
********************************/
