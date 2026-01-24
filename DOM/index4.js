let btn = document.querySelector('#btn');
let msg = document.querySelector('#msg');

btn.addEventListener('click', function () {

    let user = document.querySelector('#username').value;
    let pass = document.querySelector('#password').value;

    if (user === "" || pass === "") {
        msg.innerText = "❌ All fields are required";
        msg.style.color = "red";
    } else {
        msg.innerText = "✅ Sign In Successful";
        msg.style.color = "green";
    }

});
