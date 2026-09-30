/* create singleton through create object */ 
const tinderUser = new Object();

tinderUser.id = "101@abc";
tinderUser.name = "sachin kumar";
tinderUser.isLoggedin = false;
console.log(tinderUser);
console.log(Object.keys(tinderUser));


/* create nonsingleton  through create object */

const user = {};
user.id = "@123sacg";
user.name = "sachin";
user.isloggedin = false;

console.log(user);
console.log(Object.values(user));


/* direct create object*/
const student_details={
    name: "sachin",
    isloogedin: false,
    college:"MITS"
}
console.log(student_details);
console.log(Object.entries(student_details));





