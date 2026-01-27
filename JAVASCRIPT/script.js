let btn = document.getElementById("loadBtn");
let usersDiv = document.getElementById("users");
let sendBtn = document.getElementById("sendBtn");

/* ---------- GET REQUEST ---------- */

btn.addEventListener("click", async function () {

    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();

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

/* ---------- POST REQUEST ---------- */

sendBtn.addEventListener("click", async function () {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let newUser = {
        name: name,
        email: email
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

    alert("Data Sent Successfully!");
});
