/* render the navar */
let navbar = document.querySelector('nav');
navbar.innerHTML = `
<ul class="navbar">
<li>Home </li>
<li>About</li>
<li>Login</li>
<li>Sign In</li>
<li>Contact Us</li>
</ul>
`
    ;
/* Rendering Images Using map()*/

let imagecollectionlink = ['https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1599906823892-321f8347dfcd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D', 'https://media.istockphoto.com/id/1279300690/photo/aerial-of-waves-and-reefs.webp?a=1&b=1&s=612x612&w=0&k=20&c=f1F07_2FbsFF0S_yrap6D3WnarfORd-BWT750TMQj04=', 'https://media.istockphoto.com/id/1279300690/photo/aerial-of-waves-and-reefs.webp?a=1&b=1&s=612x612&w=0&k=20&c=f1F07_2FbsFF0S_yrap6D3WnarfORd-BWT750TMQj04=', 'https://media.istockphoto.com/id/658604766/photo/hawaii-scenics.webp?a=1&b=1&s=612x612&w=0&k=20&c=gCeZMcGm8kUg6hNw1QImM1UCz3UIDHf_7K-JkGPLJ34=', 'https://images.unsplash.com/photo-1599906823814-fb3d76cc9548?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D', 'https://plus.unsplash.com/premium_photo-1667223723000-8cce5f8f531e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'];

let containerdiv = document.querySelector('div');
containerdiv.innerHTML = imagecollectionlink.map((imagelink) => {
    return `<div class="card">
    <img src="${imagelink}">
    </div>
   
    `
})
    .join("")
console.log(containerdiv);

/* footer rendering*/ 
let footer = document.querySelector("footer");

footer.innerHTML = `
<div class="footer-container">
    <h2>My Website</h2>
    <p>Copyright 2026</p>
</div>
`;

