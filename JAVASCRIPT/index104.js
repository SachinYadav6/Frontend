console.log('sachin kumar');
let array = [1, 3, 5, 8, 10];
const totalsum = array.reduce((acc, currval) => {
    return acc + currval;
    
}, 0)
console.log(totalsum);

