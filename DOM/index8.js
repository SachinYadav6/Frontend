let body = document.querySelector('body');
let div = document.createElement('div');
div.setAttribute('id', 'div',);

div.classList.add('div');
body.appendChild(div)

let btn = document.createElement("button");
btn.innerText = "Click Me!";
body.append(btn);

btn.setAttribute("id", "button");
let userChoice = prompt('large scable btn clicked pr:---')
if (userChoice.toLowerCase() === 'large') {
    btn.addEventListener('click', () => {
        console.log('btn was clicked!---lar');
        
        btn.classList.add('btn')
    })
}

btn.addEventListener('mouseenter', () => {
    div.classList.add('animate');
      
    }
    
);



