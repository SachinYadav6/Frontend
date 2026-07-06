
let r = Math.floor(Math.random() * 255) + 1;
console.log(r);

let g = Math.floor(Math.random() * 255) + 1;
console.log(g);

let b= Math.floor(Math.random() * 255) + 1;
console.log(b);

let color = `rgb(${r},${g},${b})`;
console.log(color);


function changecolrstart() {
    let body = document.querySelector('body');
    console.log(body);
    body.style.backgroundColor = color;
 
}
// changecolrstart();
let intervalid;
let start = document.querySelector('.start');
console.log(start);
start.addEventListener('click', () => {
    if (intervalid) return;
    intervalid=
    setInterval(() => {
        let r = Math.floor(Math.random() * 255) + 1;
        let g = Math.floor(Math.random() * 255) + 1;
        let b = Math.floor(Math.random() * 255) + 1;

        let color = `rgb(${r},${g},${b})`;
        console.log(color);

        let body = document.querySelector('body');
        body.style.backgroundColor =color;
    }, 2000)
});

let stop = document.querySelector('.stop');
console.log(stop);
stop.addEventListener('click', () => {
    clearInterval(intervalid);
    intervalid = null;
    let body = document.querySelector('body');
    body.style.backgroundColor = " ";

});



