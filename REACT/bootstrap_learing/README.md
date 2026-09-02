# 🛍️ Product Collection – React Practice Project

A simple **Product Collection** practice project built using **React.js** and **Bootstrap**.

This project was created to practice important React concepts such as components, props, state, hooks, array methods, and Bootstrap utility classes.

## 🚀 Features

* Display multiple products
* Reusable Product Card component
* Search products by name
* Dynamic filtering using `filter()`
* Search state management using `useState()`
* Optimized filtering using `useMemo()`
* Horizontal product scrolling
* Responsive styling using Bootstrap
* Clean and reusable component structure

## 🛠️ Technologies Used

* React.js
* JavaScript
* Bootstrap
* React Router
* Vite

## 📚 Concepts Practiced

### React

* Functional Components
* JSX
* Props
* `useState`
* `useMemo`
* Event Handling
* Conditional Rendering
* `map()`
* `filter()`
* React `key` prop

### Bootstrap

* Flexbox utilities
* Spacing utilities
* Width and height utilities
* Typography
* Colors
* Borders
* Border radius
* Shadows
* Overflow utilities
* Responsive display utilities

## 🔍 Product Search

The search functionality filters products based on their heading.

```js
const filteredProduct = useMemo(() => {
  return products.filter((item) => {
    return item.heading
      .toLowerCase()
      .includes(search.toLowerCase())
  })
}, [search])
```

## 📁 Project Structure

```text
src/
│
├── components/
│   └── Card.jsx
│
├── pages/
│   └── ProductCollection.jsx
│
├── App.jsx
└── main.jsx
```

## ▶️ How to Run

Clone the repository:

```bash
git clone <your-repository-url>
```

Go into the project folder:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown by Vite in your browser.

## 🎯 Purpose

This project is mainly created for **React and Bootstrap practice**.

The main goal was to understand how React components, props, state, hooks, array methods, and Bootstrap utilities work together to build a dynamic UI.

## 👨‍💻 Author

**sachin kumar**
