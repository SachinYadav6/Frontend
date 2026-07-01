let div = document.querySelector('.card');
let img = document.querySelector('img');

div.addEventListener('mouseenter', () => {
    div.style.borderRadius = '20px';
    img.style.opacity = "1";
});

div.addEventListener('mouseleave', () => {
    div.style.borderRadius = '0px';
    img.style.opacity = "0";
});

div.addEventListener('mouseenter', () => {
    div.style.transform = "scale(1.1)";
});

div.addEventListener('mouseleave', () => {
    div.style.transform = "scale(1)";
});
