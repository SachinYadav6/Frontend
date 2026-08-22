# 🍎 usememoMapListProduct

A simple **React Product Card Project** built to practice and understand:

* ⚛️ React Components
* 🧠 `useMemo` Hook
* 🔄 `map()` Method
* 🔍 Product Search & Filtering
* 📦 Props
* 📋 Array of Objects
* 🎨 Basic Product Card UI

This project displays a collection of fruits as product cards and provides a search input to filter fruits by their name.

---

## 📌 Project Name

**usememoMapListProduct**

---

## 🚀 Project Overview

The main purpose of this project is to understand how React can be used to display a list of products dynamically.

The project contains a fruit collection with information such as:

* Fruit name
* Description
* Price
* Image

The `map()` method is used to display each fruit as a reusable `Card` component.

The `useMemo()` hook is used to optimize the filtering operation when searching for a fruit.

---

## ✨ Features

### 🍎 Product Cards

Each fruit is displayed inside a reusable card containing:

* Product image
* Product heading
* Product description
* Product price
* Profile View button

### 🔍 Search Product

Users can search for a fruit using the search input.

For example:

```text
apple
```

The application will display only the matching fruit cards.

### 🧠 useMemo Hook

The `useMemo()` hook is used to calculate the filtered fruit list.

```jsx
const filteredFruits = useMemo(() => {
  return fruitCollection.filter((fruit) =>
    fruit.heading.toLowerCase().includes(search.toLowerCase())
  );
}, [search]);
```

This means the filtering calculation is performed again when the `search` value changes.

### 🔄 map() Method

The `map()` method is used to create a `Card` component for every fruit.

```jsx
filteredFruits.map((fruitcard, index) => (
  <Card
    key={index}
    heading={fruitcard.heading}
    description={fruitcard.description}
    img_url={fruitcard.img_url}
    price={fruitcard.price}
  />
))
```

---

## 🛠️ Technologies Used

* React.js
* JavaScript
* JSX
* HTML
* CSS
* React Hooks

  * `useState`
  * `useMemo`

---

## 📂 Project Structure

```text
usememoMapListProduct/
│
├── src/
│   ├── App.jsx
│   ├── Card.jsx
│   ├── Product.jsx
│   ├── App.css
│   └── main.jsx
│
├── public/
│
├── package.json
└── README.md
```

---

## 🧩 Components

### 1. App Component

`App.jsx` is the main component of the application.

It contains the `fruitCollection` array and renders the `Product` component.

```jsx
export default function App() {
  return (
    <>
      <h1>product</h1>
      <Product />
    </>
  );
}
```

---

### 2. Product Component

`Product.jsx` is responsible for:

* Search input
* Managing search state
* Filtering products
* Rendering product cards

It uses:

```jsx
useState()
```

for storing the search value.

And:

```jsx
useMemo()
```

for filtering the fruit collection.

---

### 3. Card Component

`Card.jsx` is a reusable component.

It receives product information through **props**.

```jsx
<Card
  heading={fruitcard.heading}
  description={fruitcard.description}
  img_url={fruitcard.img_url}
  price={fruitcard.price}
/>
```

Inside the `Card` component, props are used like this:

```jsx
<h1>{props.heading}</h1>
<p>{props.description}</p>
<p>{props.price}</p>
<img src={props.img_url} alt="apple img" />
```

---

## 📦 Fruit Collection

The application currently contains fruits such as:

* 🍎 Apple
* 🥭 Mango
* 🍈 Guava
* 🍊 Papaya
* ❤️ Pomegranate

Each fruit is stored as an object:

```jsx
{
  description: "Apple is a good fruit.",
  heading: "apple",
  price: "$234",
  img_url: "image-url"
}
```

---

## 🔍 How Search Works

The search input uses `useState()`:

```jsx
const [search, setsearch] = useState("");
```

Whenever the user types something, the state is updated:

```jsx
onChange={(e) => setsearch(e.target.value)}
```

Then `useMemo()` filters the fruit collection:

```jsx
const filteredFruits = useMemo(() => {
  return fruitCollection.filter((fruit) =>
    fruit.heading.toLowerCase().includes(search.toLowerCase())
  );
}, [search]);
```

### Example

If the user searches:

```text
man
```

The result will contain:

```text
Mango
```

If the user searches:

```text
apple
```

The result will contain:

```text
Apple
```

---

## 🧠 What I Learned From This Project

This project helps in understanding the following React concepts:

### Props

Passing data from one component to another.

### useState

Managing changing data inside a component.

### useMemo

Memoizing a calculated value and recalculating it when its dependency changes.

### map()

Rendering multiple React components from an array.

### filter()

Searching/filtering products based on user input.

### Reusable Components

Creating a single `Card` component and using it for multiple products.

---

## ▶️ How to Run the Project

### 1. Clone the Repository

```bash
git clone <your-github-repository-url>
```

### 2. Go Inside the Project

```bash
cd usememoMapListProduct
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The project will then be available on the local development URL shown in your terminal.

---

## 📸 Project Functionality

The application works like this:

```text
User enters fruit name
        ↓
Search state updates
        ↓
useMemo filters fruitCollection
        ↓
map() creates Card components
        ↓
Matching fruit cards are displayed
```

---

## 🎯 Future Improvements

Some features that can be added later:

* 🛒 Add to Cart functionality
* ❤️ Add to Wishlist
* 🔎 Better search functionality
* 💰 Sort products by price
* 📱 Responsive design
* ⭐ Product ratings
* 📄 Product details page
* 🛍️ Shopping cart page
* 🔐 Login/Register functionality
* 🗄️ Fetch products from an API

---

## 👨‍💻 Author

**Your Name**

Made with ❤️ using **React.js**

---

## ⭐ If You Like This Project

If this project helped you understand React `useMemo`, `map()`, `filter()`, props, and reusable components, consider giving the repository a ⭐ on GitHub.

---

# 🙏 Thank You

Thanks for checking out **usememoMapListProduct**!

Keep learning, keep building, and keep improving your React skills. 🚀⚛️
