const person = {
    name: "Sachin",
    age: 22
};
console.log(person);


// Add a Method (Function inside Object
const person1 = {
    name: "Sachin",
    age: 22,
    greet: function () {
        return "Hello, my name is " + this.name;
    }
};

console.log(person1);
