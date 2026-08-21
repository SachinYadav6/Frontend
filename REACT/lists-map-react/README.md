# React Card List

A simple React project that demonstrates how to **render reusable Card components dynamically using JavaScript `map()`**.

## 📌 About the Project

This project contains a list of developers with their:

* Name
* Job/Developer Role
* Profile Image

The data is stored in an array and each object is passed to a reusable `Card` component using **props**.

## 🚀 Features

* Reusable `Card` component
* Dynamic rendering using `.map()`
* Props-based data passing
* Developer profile cards
* Profile images using Unsplash
* Unique `key` for each rendered component

## 🛠️ Technologies Used

* React.js
* JavaScript
* JSX
* React Components
* Props
* Array `map()` method

## 📂 Project Structure

```text
src/
├── App.jsx
├── Card.jsx
└── main.jsx
```

## ⚙️ How It Works

The developer information is stored inside an array:

```js
const data = [
  {
    h1: "Sachin",
    p: "Frontend Developer",
    img_url: "https://..."
  },
  // ...
];
```

The array is then rendered using the `map()` method:

```jsx
data.map((elem, index) => (
  <Card
    key={index}
    img_url={elem.img_url}
    heading={elem.h1}
    description={elem.p}
  />
))
```

Each object is passed to the `Card` component as props.

## 🧩 Card Component

The `Card` component receives three props:

```text
img_url       → Profile image
heading       → Developer name
description   → Developer role
```

This makes the `Card` component reusable for multiple developers.

## ▶️ Run the Project

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in your terminal.

## 🎯 Learning Goals

This project is useful for beginners learning:

1. React components
2. Props
3. Reusable components
4. JavaScript arrays
5. `.map()` in React
6. Dynamic UI rendering

## 👨‍💻 Author

Made with ❤️ while learning React.
