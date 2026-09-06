# React Form Handling Practice

A React practice project focused on understanding **Form Handling, Controlled Inputs, State Management, and Form Submission**.

## 🚀 Concepts Covered

* `useState`
* Controlled Inputs
* `value`
* `onChange`
* `onSubmit`
* `e.preventDefault()`
* Getting input values
* Creating an object from state values
* Object destructuring
* Form submission handling

## 📌 Form Input Flow

```text
User Input
    ↓
onChange
    ↓
setState
    ↓
State Value
    ↓
onSubmit
    ↓
Get Form Data
```

## 🧠 Example

```jsx
const [name, setname] = useState("");
const [email, setemail] = useState("");
```

Input values are stored in React state:

```jsx
setname(e.target.value);
setemail(e.target.value);
```

On form submit:

```jsx
const user = { name, email };

console.log(name, email);
```

## 🎯 Learning Goal

The goal of this project is to understand how React handles user input and form submission using **state and event handling**, instead of memorizing syntax.

## 👨‍💻 Author

Sachin
