/********************************
 BASIC FUNCTIONS
********************************/

// 1. Normal Function
function greet() {
    console.log("Hello World");
}
greet();

// 2. Function with Parameter
function add(a, b) {
    console.log("Sum:", a + b);
}
add(5, 3);

// 3. Return Function
function sub(a, b) {
    return a - b;
}
console.log("Subtract:", sub(10, 4));

/********************************
 FUNCTION EXPRESSIONS
********************************/

let multiply = function (a, b) {
    return a * b;
};
console.log("Multiply:", multiply(4, 5));

/********************************
 ARROW FUNCTIONS
********************************/

let square = (x) => {
    return x * x;
};
console.log("Square:", square(6));

// One line arrow
let cube = x => x * x * x;
console.log("Cube:", cube(3));

/********************************
 DEFAULT PARAMETER
********************************/

function welcome(name = "User") {
    console.log("Welcome", name);
}
welcome();
welcome("Sachin");

/********************************
 CALLBACK FUNCTION
********************************/

function sayHello() {
    console.log("Hello Callback");
}

function callMe(fn) {
    fn();
}

callMe(sayHello);

/********************************
 HIGHER ORDER FUNCTION
********************************/

function calculator(a, b, operation) {
    return operation(a, b);
}

let result = calculator(5, 2, (x, y) => x + y);
console.log("Calculator:", result);

/********************************
 ANONYMOUS FUNCTION
********************************/

setTimeout(function () {
    console.log("Anonymous Function");
}, 500);

/********************************
 IIFE (Immediately Invoked)
********************************/

(function () {
    console.log("IIFE Running");
})();

/********************************
 REST PARAMETER
********************************/

function total(...nums) {
    let sum = 0;
    for (let n of nums) {
        sum += n;
    }
    return sum;
}
console.log("Total:", total(1, 2, 3, 4, 5));

/********************************
 RECURSION
********************************/

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
console.log("Factorial:", factorial(5));

/********************************
 FUNCTION IN OBJECT (METHOD)
********************************/

let user = {
    name: "Sachin",
    greet: function () {
        console.log("Hello", this.name);
    }
};

user.greet();

/********************************
 CONSTRUCTOR FUNCTION
********************************/

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p1 = new Person("Aman", 22);
console.log(p1);

/********************************
 CLOSURE
********************************/

function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log("Count:", count);
    };
}

let counter = outer();
counter();
counter();

/********************************
 FUNCTION RETURNING FUNCTION
********************************/

function createMultiplier(x) {
    return function (y) {
        return x * y;
    };
}

let double = createMultiplier(2);
console.log("Double:", double(5));

/********************************
 ASYNC FUNCTION
********************************/

async function fetchData() {
    return "Data Loaded";
}

fetchData().then(res => console.log(res));

/********************************
 END OF FILE
********************************/
