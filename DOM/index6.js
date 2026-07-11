/*

let img = document.querySelector('img');
let att = img.getAttribute('src');
console.log(att);

let btn = document.querySelector('button');
console.log(btn);

btn.addEventListener('click', () => {
    img.src = 'https://images.unsplash.com/photo-1779896412225-e2f374234cd1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'    
    
});

*/
/*
let arrayurl = ['https://plus.unsplash.com/premium_photo-1751906599818-c14e5afd1518?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', 'https://images.unsplash.com/photo-1783658439428-bc650ffec8f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8', 'https://images.unsplash.com/photo-1783615693285-83b2017529b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8', 'https://plus.unsplash.com/premium_photo-1755882951379-6b8c26fb0fd5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8', 'https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8','https://images.unsplash.com/photo-1783591955200-35732f39842b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8'];
    let img = document.querySelector('img');

let i = 0;
let btn = document.querySelector('button');
console.log(btn);
btn.addEventListener('click', () => {
    img.src = arrayurl[i];
    i++;
    
})

*/

// third concept slider


let arrayurl = ['https://plus.unsplash.com/premium_photo-1751906599818-c14e5afd1518?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', 'https://images.unsplash.com/photo-1783658439428-bc650ffec8f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8', 'https://images.unsplash.com/photo-1783615693285-83b2017529b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8', 'https://plus.unsplash.com/premium_photo-1755882951379-6b8c26fb0fd5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8', 'https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8', 'https://images.unsplash.com/photo-1783591955200-35732f39842b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8'];
let img = document.querySelector('img');
let btn = document.querySelector('button');
let i = 0;
btn.addEventListener('click', () => {
    img.src = arrayurl[i];
    i++;
    if (i === arrayurl.length) {
        i = 0;
    }
})



