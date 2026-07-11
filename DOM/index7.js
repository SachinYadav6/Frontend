/* random color generate */ 
let div = document.querySelector('div');
console.log(div);
let h2 = document.querySelector('h2');
console.log(h2);
let btn = document.querySelector('button');
console.log(btn);
let body = document.querySelector('body');
console.log(body);

btn.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r},${g},${b})`;
    console.log(color);
    div.style.backgroundColor = color;
    div.style.border = "5px solid white";
    h2.style.color = 'white';
    h2.innerText = color;
    body.style.backgroundColor = color;

    
});





