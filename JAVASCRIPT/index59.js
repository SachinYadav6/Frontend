/* function revise*/

function add(a, b) {
    return a ** b;
}

console.log(add(3,4));


function objectreturn() {
     FullName={
        name: 'sachin kumar',
        rollnumber: '0179CS221068',
        class: 'b.tech',
        cpga:7.4,
        
    }
    return FullName;
    
}

console.log(objectreturn());


/*  Object Destructuring */ 

let student = {
    name: 'sachin kumar',
    roll: '0179CS221068',
    classes: 'b.tch',
    cgpa: 7.4
};
let { name: fullname, cgpa: marks } = student;
console.log(fullname);
console.log(marks);


let { name, roll, classes, cgpa } = student;
console.log(name);
console.log(roll);
console.log(cgpa);


/*  rename karke destrure   */







