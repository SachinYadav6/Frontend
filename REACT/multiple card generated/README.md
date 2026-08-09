# Multiple Card Generated

A React project that generates multiple cards dynamically using an array of objects, `.map()`, and props.

## 🚀 What I Used

* React
* JavaScript
* JSX
* CSS
* React Components
* Props
* `.map()`
* Array of Objects

## 🧩 How It Works

The project stores card data inside an array of objects:

```js
const collection = [
  {
    id: 1,
    title: "Cat",
    description: "A cute and playful cat.",
    image: "image-url"
  },
  // ...
];
```

The collection is then used with `.map()` to generate multiple `Card` components:

```jsx
collection.map((elem) => (
  <Card
    key={elem.id}
    img={elem.image}
    p={elem.description}
    header={elem.title}
  />
))
```

Each card receives its data through props.

## 🎯 Main Concept

```text
Collection
    ↓
   map()
    ↓
   Props
    ↓
Card Component
    ↓
Multiple Cards
```

## ✨ Features

* Generates multiple cards dynamically
* Reusable `Card` component
* Data passed through props
* Uses `.map()` for rendering
* Responsive card layout with Flexbox
* Individual card styling with CSS
* Image and text are dynamically generated

## 📁 Project Structure

```text
src/
├── App.jsx
├── Card.jsx
└── App.css
```

## 📚 Purpose

This project is created to practice React fundamentals such as **components, props, arrays, `.map()`, and reusable UI components**.
