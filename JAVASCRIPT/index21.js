// for loop 
for (let i = 0; i <= 5; i++){
    console.log(i);
    
}

let n = 5;
for (let i = 5 ; i <= n * 10; i += 5){
    console.log(i);
    
}

for (let i = 1; i <= 5; i++){
    let row = " ";
    for (let j = 1; j <= i; j++){
        row += '*';
        
    }
    console.log(row);
    
}
 
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}
