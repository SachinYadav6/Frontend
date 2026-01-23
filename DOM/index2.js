let p1 = document.querySelector('p');
console.log(p1);

let r = Math.floor(Math.random() * 254 + 1);
console.log(r);

let g = Math.floor(Math.random() * 254 + 1);
console.log(g);

let b = Math.floor(Math.random() * 254 + 1);
console.log(b);


let rgb = `rgb(${r},${g},${b})`;
console.log(rgb);

p1.style.color = rgb;




