let classname = document.getElementsByClassName('classname');
console.log(classname);

let idname = document.getElementById('idname');
console.log(idname);

let h1 = document.getElementsByTagName('h1');
console.log(h1);

let h1text = document.querySelector('#idname').innerText = 'sachin kumar';
console.log(h1text);

/*

let p =document.querySelectorAll('p')
console.log(p);


for (let i = 0; i < p.length; i++){
    console.log(p);
    
    p[i].style.color = "green";
    p[i].style.fontSize = "25px";
    p[i].style.backgroundColor = "yellow";
  

*/
let p = document.querySelectorAll('p')
console.log(p);
p.forEach((clr) => {
    clr.style.color = "green";
    clr.style.fontSize = "25px";
    clr.style.backgroundColor = "yellow";

    
})



