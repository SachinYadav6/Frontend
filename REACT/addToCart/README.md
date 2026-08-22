# 🛒 React Add to Cart

A simple **React.js Add to Cart project** that demonstrates how to manage cart items and item quantities using React's `useState` hook.

## 📌 Features

* Display a Mango product card
* Add product to cart
* Increase product quantity when the same product is added again
* Display cart items dynamically
* Display product image, name, description, price, and quantity
* Uses React `useState` for cart state management
* Uses `find()` to check whether a product already exists
* Uses `map()` to update the product quantity

## 🛠️ Technologies Used

* React.js
* JavaScript
* JSX
* CSS
* React `useState` Hook

## 🧠 How It Works

When the **Add to Cart** button is clicked:

```text
Add to Cart
     ↓
cart.find()
     ↓
Is Mango already in cart?
     ↙             ↘
   YES             NO
    ↓               ↓
  map()          New Array
    ↓               ↓
quantity + 1      push()
    ↓               ↓
setCart()        setCart()
```

### 1. Check Existing Product

The `find()` method checks whether Mango is already present in the cart:

```js
const existingitem = cart.find(
  (item) => item.name === "mango"
);
```

### 2. If Product Already Exists

The `map()` method creates an updated cart and increases the quantity:

```js
const updatedCart = cart.map((item) => {
  if (item.name === "mango") {
    return {
      ...item,
      quantity: item.quantity + 1
    };
  }

  return item;
});

setcart(updatedCart);
```

### 3. If Product Does Not Exist

A new array is created and the product is added:

```js
const newcart = [...cart];
newcart.push(cartdetail);
setcart(newcart);
```

## 📂 Component

The main component is:

```text
Card.jsx
```

The component contains:

* Product information
* Cart state
* Add to cart functionality
* Cart rendering

## 🚀 Getting Started

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Then open the local URL shown in your terminal.

## 📖 Example

Initially:

```text
Cart: 0
```

After clicking **Add to Cart** once:

```text
Cart: 1
Mango
Price: 250
Quantity: 1
```

After clicking **Add to Cart** again:

```text
Cart: 1
Mango
Price: 250
Quantity: 2
```

The cart length remains `1` because the same product is not added as a duplicate item. Instead, its quantity is increased.

## 🎯 Learning Goals

This project is useful for learning:

* React state management
* `useState`
* Array spread operator
* `find()`
* `map()`
* `push()`
* Conditional logic
* Rendering arrays using `map()`
* Basic shopping-cart logic

## 🔮 Future Improvements

* Add multiple products
* Add Remove from Cart functionality
* Add Increase/Decrease quantity buttons
* Calculate total cart price
* Add product IDs instead of comparing names
* Add localStorage support
* Add responsive styling
* Create separate Product Card and Cart components

## 👨‍💻 Author

Created as a React practice project to understand **Add to Cart functionality and state management**.
