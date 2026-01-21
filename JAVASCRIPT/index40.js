let collectionrender = [{
    id: 101,
    img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
    name: "watch",
    price:1234,
},
    {
        id: 102,
        img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
        name: "book",
        price: 1934,
    
    },
    {
        id: 103,
        img: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
        name: "headphone",
        price: 5034,
    }
]

const container = document.getElementById("product-container");
collectionrender.forEach(item => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>Price: ₹${item.price}</p>
    <button onclick="buyProduct(${item.id})">Buy Now</button>
  `;

    container.appendChild(card);
});

function buyProduct(id) {
    let product = collectionrender.find(p => p.id === id);
    alert(`You selected: ${product.name} (₹${product.price})`);
}

