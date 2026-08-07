# Reusable Button Component (React)

## 📌 Overview

This project demonstrates how to create a reusable Button component in React using props.

Instead of writing the same `<button>` element multiple times, we create a single `Button` component and reuse it with different text values.

## 🚀 Features

* Reusable React component
* Props (`text`) to display different button labels
* Clean and reusable code
* Easy to maintain

## 📂 Project Structure

```text
src/
├── App.jsx
└── Button.jsx
```

## 🧩 Button Component

```jsx
export default function Button(props) {
  return (
    <button>{props.text}</button>
  );
}
```

## 🖥️ Usage

```jsx
<Button text="Login" />
<Button text="Contact Us" />
<Button text="Sign Up" />
<Button text="Reset" />
```

## ✅ Output

* Login
* Contact Us
* Sign Up
* Reset

Each button uses the same component, but displays different text through props.

## 📚 What I Learned

* Creating React components
* Reusing components
* Passing data using props
* Keeping UI code clean and maintainable

## 🛠️ Technologies Used

* React
* JavaScript (ES6)
* JSX
* CSS
