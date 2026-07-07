// array
let number = [1, 2, 5, 87, 90];
console.log(number);

let data = ["sachin kumar", "Basudav yadav", "mohani devi", "Pradeep yadav", "23"];
console.log(data);


let nested_array = [[1, 3, 5, 8], ["sachin", "arbaj", "sohal", "firoj"], ['a', 'e', 'i', 'o', 'u'], [90, 98, 76, 'j', 87, 'o'], [0, 9, 78, 65], [89, 98, 67, 'g']];
console.log(nested_array);

for (let container_array_collection of nested_array) {
    console.log(container_array_collection);
    
}