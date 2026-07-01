//  topic js object literals

let students = {
    name: 'sachin kumar',
    rollnumber: '0179CS221068',
    Fathername: 'Basudev Yadav',
    mothername: 'Mohani Devi',
    cousre:'B.tech'
}
console.log(students, students["name"]);

for (let student in students) {
    console.log(students[student]);
    
}
