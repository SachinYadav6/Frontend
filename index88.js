const btn = document.getElementById("loadBtn");
const userList = document.getElementById("userList");

btn.addEventListener("click", () => {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            userList.innerHTML = "";
            data.forEach(user => {
                const li = document.createElement("li");
                li.innerText = user.name;
                userList.appendChild(li);
            });
        })
        .catch(error => {
            console.log("Error:", error);
        });

});