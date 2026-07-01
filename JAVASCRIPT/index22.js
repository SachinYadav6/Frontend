// while loop
let i = 0;
let n = 90;
while (i<=n) {
    console.log(i);
    i++;
    
    
}


let guess = 'quit';
let favouriteMovie = 'avatar';
while (guess !== favouriteMovie) {
    console.log("correct");
    if (guess == 'quit') {
        console.log('you quit');
        break;
        
    }
    
}

