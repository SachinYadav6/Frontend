/* keyprees button by user color choose
by user  color choose and container div is background color change 
 */ 
let choicecolor = document.querySelector('input');
choicecolor.addEventListener('keypress', () => {
    let value = choicecolor.value;
    document.querySelector('h2').innerText = value;
    let div = document.querySelector('div');

    switch (value) {
        case value:
            div.style.backgroundColor = value;
            
            break;
    
        default:
           console.log('not match choose color:');
           
            
            break;
    }
    
    
});




