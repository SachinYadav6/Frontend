const { forIn } = require("lodash");

let objectcollection = {
    '1': 'sachin',
    '2': 'anil kumar',
    '3': 'suraj',
    '4':'kamal'
}
console.log(objectcollection);

for (let k in objectcollection) {

    console.log(k,objectcollection[k]);
    
}

let studentcollection = {
    name: 'sachin kumar',
    rollnumber: '0179CS221068',
    class: 'b.tech',
    city: 'bhopal',
    state:'jharkhand'
}

console.log(studentcollection['name'] = 'sonu kumar');
console.log(studentcollection);

for (const k in studentcollection) {
   console.log(k,studentcollection[k]);
   
    
}

/* destructure */

let { name, rollnumber, class: course, city, state } = studentcollection;
let { name: username,city : usercity='dehli' } = studentcollection;
console.log(username); // 'sachin'
console.log(usercity);

console.log(name);
console.log(rollnumber);
console.log(course);
console.log(city);
console.log(state);

console.log(studentcollection);






for (let k in studentcollection) {
    console.log(studentcollection[k]);
    
}



