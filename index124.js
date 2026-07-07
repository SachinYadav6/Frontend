let studentinformation = {
    name: 'sachin kumar',
    loggedincount: '12',
    signesin: true,
    studentnamePrint: function () {
        console.log(this.name);
        
    }
}

console.log(studentinformation);

// destructuring object
const { signesin: sign, loggedincount: logincount, studentnamePrint} = studentinformation;
console.log(sign);
console.log(logincount);
studentinformation.studentnamePrint()


