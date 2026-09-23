const str = " 1frontEnd";
let count = 0;
for (let i = 0; i < str.length; i++){
    if (str[i] === " ") {
        continue;
    }
    if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
       
        count++;
    }
}
console.log(count);
