let div = document.querySelector('div');
console.log(div);
console.log(div.getAttribute('id'));
console.log(div.getAttribute('class'));

console.log(div.setAttribute('class', 'k'));
console.log(div.getAttribute('class'));

console.log(div.setAttribute('id', 'container-div'));
console.log(div.getAttribute('id'));
/*
let btn = document.querySelector('button');
console.log(btn.innerHTML, btn.innerText);
*/
/*
let body = document.querySelector('body');
console.log(body);
*/


/*togggle krna body pe*/
let btn = document.querySelector('button');
let body = document.querySelector('body');

let x = 'light';

btn.addEventListener('click', function () {

    if (x === 'light') {
        body.setAttribute('id', 'dark');
        x = 'dark';
    } else {
        body.setAttribute('id', 'light');
        x = 'light';
    }

});






