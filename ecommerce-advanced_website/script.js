const products = [
    { id: 1, name: "Sneakers", price: 1999, img: "https://images.unsplash.com/photo-1603787081207-362bcef7c144?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 2, name: "Watch", price: 2999, img: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D" },
    { id: 3, name: "Headphones", price: 1499, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },
    { id: 3, name: "laptop", price: 55000, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },
    { id: 3, name: "Mobile", price: 20500, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },
    { id: 3, name: "charger", price:1800 , img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },
    { id: 3, name: "wheelchair", price: 6500, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },

    { id: 3, name: "clothes", price: 6500, img: "https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 3, name: "wheelchair", price: 6500, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },
    { id: 3, name: "wheelchair", price: 6500, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },
    { id: 3, name: "wheelchair", price: 6500, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },

    { id: 3, name: "wheelchair", price: 6500, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },
    { id: 3, name: "wheelchair", price: 6500, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },
    { id: 3, name: "wheelchair", price: 6500, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },


    { id: 3, name: "wheelchair", price: 6500, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },


    { id: 3, name: "wheelchair", price: 6500, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },



    { id: 3, name: "wheelchair", price: 6500, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },



    { id: 3, name: "wheelchair", price: 6500, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },


    { id: 3, name: "wheelchair", price: 6500, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },


    { id: 3, name: "wheelchair", price: 6500, img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fHww" },

    







];


let cart = JSON.parse(localStorage.getItem("cart")) || [];


const productContainer = document.querySelector(".products");
const cartCount = document.getElementById("cart-count");


function renderProducts() {
    productContainer.innerHTML = "";
    products.forEach(p => {
        productContainer.innerHTML += `
<div class="card">
<img src="${p.img}" />
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
</div>`;
    });
}



function addToCart(id) {
    cart.push(id);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}


function updateCartCount() {
    cartCount.innerText = cart.length;
}


renderProducts();
updateCartCount();