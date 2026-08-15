# ShopKart 🛒

A modern e-commerce frontend application built with React, Redux Toolkit, React Router, and DummyJSON API.

## 🚀 Features

- Product listing
- Product details page
- Add to cart functionality
- Increase/decrease product quantity
- Remove product from cart
- Cart item count in navbar
- Cart total price calculation
- Empty cart state
- Loading indicator
- Login UI
- 404 Not Found page
- Responsive design
- React Router based navigation
- Redux Toolkit state management

## 🛠️ Tech Stack

- React.js
- Redux Toolkit
- React Router DOM
- Axios
- JavaScript
- CSS
- DummyJSON API
- Vite

## 📁 Project Structure

src/
├── assets/
├── components/
│   ├── Footer.jsx
│   ├── Loader.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
│
├── context/
│   └── AppContext.jsx
│
├── hooks/
│   └── useLocalStorage.js
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   └── NotFound.jsx
│
├── redux/
│   └── slices/
│       └── productSlice.js
│
├── services/
│   └── api.js
│
├── App.jsx
├── index.css
└── main.jsx

## 🛒 Cart Functionality

The cart is managed using Redux Toolkit.

Each cart product contains a `quantity` property.

Example:

{
  id: 1,
  title: "Product",
  price: 9.99,
  quantity: 2
}

The application supports:

- Adding products to cart
- Increasing quantity
- Decreasing quantity
- Removing products
- Calculating total cart price
- Displaying total cart quantity

## 🌐 API

Products are fetched from:

https://dummyjson.com/products

Axios and Redux Toolkit's `createAsyncThunk` are used to fetch and manage product data.

## ▶️ Run Locally

Clone the repository:

git clone <your-repository-url>

Install dependencies:

npm install

Start the development server:

npm run dev

Open the local development URL shown by Vite.

## 🎯 Learning Goals

This project was built to practice:

- React component architecture
- Props
- React Hooks
- Redux Toolkit
- Async Redux actions
- React Router
- API integration
- Cart state management
- Responsive CSS
- Component-based UI development

## 👨‍💻 Author

Pradeep Kumar Yadav

Built as a React frontend project for learning and portfolio development.