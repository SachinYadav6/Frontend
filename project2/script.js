let btn = document.getElementById("loadBtn");
let usersDiv = document.getElementById("users");

/* -------- GET REQUEST -------- */

btn.addEventListener("click", async function () {

    let response = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = await response.json();   // JSON Parsing

    console.log(data);

    usersDiv.innerHTML = "";

    data.forEach(function (user) {

        usersDiv.innerHTML += `
      <p>
        <b>Name:</b> ${user.name} <br>
        <b>Email:</b> ${user.email}
      </p>
      <hr>
    `;
    });

});

/* -------- POST REQUEST -------- */

async function sendData() {

    let newUser = {
        name: "Rahul",
        email: "rahul@gmail.com"
    };

    let response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }
    );

    let result = await response.json();
    console.log("Posted Data:", result);

}

sendData();
