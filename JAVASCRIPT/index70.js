/* call back function*/ 
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Bye Bye ");
}

greet("Sachin", sayBye);
