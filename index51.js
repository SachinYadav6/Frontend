let users = [];

function signUp() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        document.getElementById("msg").innerText = "All fields required!";
        return;
    }

    users.push({
        username,
        email,
        password
    });

    document.getElementById("msg").innerText = "Signup Successful!";
    clearInputs();
}

function showLogin() {
    document.getElementById("title").innerText = "Login";
    document.querySelector("button").innerText = "Login";
    document.querySelector("button").setAttribute("onclick", "login()");
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let found = users.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (found) {
        document.getElementById("msg").innerText = "Login Successful!";
    } else {
        document.getElementById("msg").innerText = "Invalid Details!";
    }
}

function clearInputs() {
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}
