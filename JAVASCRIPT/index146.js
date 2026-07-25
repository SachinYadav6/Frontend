let num = [12, 24, 36];
const half = num.map((currentValue, index, array) => {
    return [currentValue,index,array]
})
console.log(half);
