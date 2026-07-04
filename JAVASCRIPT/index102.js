/*selector method*/
const h1 = document.getElementById('heading');
console.log(h1);
h1.style.color = 'green';

let body = document.querySelector('body');
body.style.backgroundColor = 'black';

let seceond = document.getElementsByClassName('title');
console.log(seceond);

const div = document.getElementsByClassName('bg-black');
console.log(div);
const li = document.querySelectorAll('li');
console.log(li);



let ul = document.querySelectorAll('.unorder-list  li');
console.log(ul);
let convertnodelistintoarray = Array.from(ul);
console.log(convertnodelistintoarray);

convertnodelistintoarray.forEach((item) => {
    item.style.color = 'red';
})




h1.setAttribute('class', 'heading');
h1.setAttribute('id', 'heading-one')
h1.style.backgroundColor = 'yellow';
h1.style.borderRadius = '50px';
h1.style.padding = '5px';
const getattribute = h1.getAttribute('class');
console.log(getattribute);



// create element
let divcontainer = document.createElement('div');
console.log(divcontainer);
divcontainer.className = 'container';
divcontainer.id = 'divcontainer';
divcontainer.setAttribute('bg-red', 'color-green');
divcontainer.style.backgroundColor = 'red';
divcontainer.style.color = 'white';

const addtext = document.createTextNode('sachin never ever give up');
divcontainer.appendChild(addtext)
document.body.appendChild(divcontainer);
divcontainer.classList.add('div-css');


/* eventlistener*/

divcontainer.addEventListener('click', (e) => {
    divcontainer.style.borderRadius = '80%'


});
// alert('background color green krna hai ok ? div container ka ? ');
// let userenterbackgroundcolor = prompt('enter the backgroundcoloname : -------');
// console.log(userenterbackgroundcolor);
// if (userenterbackgroundcolor === 'green') {
//     divcontainer.style.backgroundColor = 'green';
// }
// else {
//     console.log('wrong try again:-----');

// }

// edit  element  text 
let p = document.querySelector('p');
console.log(p);
p.style.color = 'white';
p.innerText = "lorem 45 is the best text";

// remove

let list = document.querySelector('li:last-child');
console.log(list);
list.remove();//remove last child papaya

// text ke bare me read out 
console.log(list.innerHTML);
console.log(list.textContent);
console.log(list.innerText);










