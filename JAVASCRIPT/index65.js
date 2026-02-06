// Function banaya
function checkVote(age) {
    if (age >= 18) {
        return "You are eligible to vote";
    } else {
        return "You are not eligible to vote";
    }
}

let age;

while (true) {
    age = 20;   // maan lo user ne 20 enter kiya

    if (age > 0) {
        let result = checkVote(age);   // function call
        console.log(result);
        break;   // loop stop
    } else {
        console.log("Enter valid age");
    }
}
