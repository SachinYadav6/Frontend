

/* for loop for in loop for of loop*/ 
let n = 5;
for (let i = 0; i <= n; i++) {
    const element = i;
    console.log(element);
    
}


let marks = {
    sachin: 54,
    sonu: 53,
    himanshu: 90,
    aman:45,
}
let key = Object.keys(marks);
for (let i = 0;i< key.length; i++){
   
    console.log(key,key[i]);
    console.log(key[i], marks[key[i]]);
    console.log(i, key[i]);
    console.log(marks[key[i]]);
    

    
}


for (let elements in marks) {
    console.log(elements);
    
}



