//  loop with array
let fruits = ['mango', 'apple', 'litchi', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++){
    console.log(i,fruits[i]);
    
}

// for of

for( let fruit of fruits) {
    console.log(fruit);
    
}

// nesting loop
let heroes = [["iron man", 'spider man'], ['super man', 'wonder women'], ['flash', 'women'], ['sachin kumar', 'sonu'], ['color', 'ratna']];
for (let i = 0; i < heroes.length; i++){
    console.log(`list:${i}`);
    for (let j = 0; j <= heroes[i].length; j++){
        console.log(heroes[i][j]);
        
    }
    
}


