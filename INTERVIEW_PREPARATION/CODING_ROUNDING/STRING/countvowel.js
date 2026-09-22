const str = "hello world";
let count = 0;
for (let i = 0; i < str.length; i++){
    if (
        str[i] === 'e'
               ||
        str[i] === 'o'
               ||
        str[i] === 'i'
               ||
        str[i] === 'u'
               ||
        str[i] === 'a'

    ) {
        count++;
        
    }
}
console.log(count);
