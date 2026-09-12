let array = [{ name: "sachin kumar", age: 23 }, { name: "sonu kumar", age: 21 }];
const arr = array.map((item) => {
    return item.name.toLowerCase().includes('sa');
});
console.log(arr);


