// CARD DATA

document.getElementById("users").textContent = 1200;
document.getElementById("sales").textContent = 530;
document.getElementById("revenue").textContent = "$12,300";
document.getElementById("orders").textContent = 320;


// TABLE DATA

const users = [
    { name: "Sachin", email: "sachin@gmail.com", status: "Active" },
    { name: "Rahul", email: "rahul@gmail.com", status: "Inactive" },
    { name: "Amit", email: "amit@gmail.com", status: "Active" },
    { name: "Neha", email: "neha@gmail.com", status: "Active" }
];

const tableBody = document.getElementById("tableBody");

users.forEach(user => {

    const tr = document.createElement("tr");

    tr.innerHTML = `
    <td>${user.name}</td>
    <td>${user.email}</td>
    <td>${user.status}</td>
  `;

    tableBody.appendChild(tr);

});



// DARK MODE

const btn = document.getElementById("modeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

});
