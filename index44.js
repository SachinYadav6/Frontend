/***********************
 BASIC OBJECT METHODS
************************/

let user = {
    name: "Sachin",
    age: 22,
    city: "Delhi"
};

// Object.keys()
console.log("Keys:", Object.keys(user));

// Object.values()
console.log("Values:", Object.values(user));

// Object.entries()
console.log("Entries:", Object.entries(user));

/***********************
 LOOPING OBJECT
************************/

for (let key in user) {
    console.log("for...in:", key, user[key]);
}

Object.entries(user).forEach(([k, v]) => {
    console.log("forEach:", k, v);
});

/***********************
 COPYING & MERGING
************************/

let a = { x: 1 };
let b = { y: 2 };

// Object.assign()
let merged = Object.assign({}, a, b);
console.log("Assign:", merged);

// Spread Operator
let copy = { ...user };
console.log("Spread Copy:", copy);

/***********************
 CHECK PROPERTY
************************/

console.log("Has name:", user.hasOwnProperty("name"));
console.log("Has phone:", user.hasOwnProperty("phone"));

/***********************
 FREEZE & SEAL
************************/

let obj1 = { score: 50 };
Object.freeze(obj1);
obj1.score = 100;
console.log("Freeze:", obj1);

let obj2 = { marks: 80 };
Object.seal(obj2);
obj2.marks = 90;
console.log("Seal:", obj2);

/***********************
 CREATE OBJECT
************************/

let parent = {
    greet() {
        console.log("Hello from parent");
    }
};

let child = Object.create(parent);
child.greet();

/***********************
 DEFINE PROPERTY
************************/

let person = {};
Object.defineProperty(person, "name", {
    value: "Rahul",
    writable: false
});

person.name = "Amit"; // won't change
console.log("DefineProperty:", person.name);

/***********************
 GET PROPERTY NAMES
************************/

console.log("Property Names:", Object.getOwnPropertyNames(user));

/***********************
 OBJECT.IS
************************/

console.log("Object.is:", Object.is(10, 10));
console.log("Object.is:", Object.is(10, "10"));

/***********************
 FROM ENTRIES
************************/

let arr = [
    ["a", 1],
    ["b", 2]
];

let newObj = Object.fromEntries(arr);
console.log("FromEntries:", newObj);

/***********************
 PRACTICAL EXAMPLE
************************/

let marks = {
    sachin: 54,
    sonu: 53,
    aman: 45
};

for (let name in marks) {
    console.log(name, "=>", marks[name]);
}
