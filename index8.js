const { log } = require("console");

// condition statement
let age = 23;
if (age > 18) {
    console.log("you are eligiable for vote.");
    
}

// if else 
let marks = 45;
if (marks > 33) {
    console.log("passs");

    
} else {
    console.log("fail");
    
}
// switch

let color = 'red';
switch (color) {
    case 'red':
        console.log("stop the car");
        
        
        break;
    case 'green':
        console.log("start the car.");
        break;
    case 'yellow':
        console.log("start the car");
        

    default:
        console.log('light was broken');
        
        break;
}

