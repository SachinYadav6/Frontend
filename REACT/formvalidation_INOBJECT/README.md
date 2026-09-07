# React Form Handling with LocalStorage

A simple React project demonstrating **form handling, controlled inputs, objects, arrays, and localStorage**.

## 🚀 Features

* React controlled form inputs
* Name, email, and password fields
* Form submission handling
* User data stored as an object
* Multiple users stored in an array
* Data persistence using `localStorage`
* Form automatically clears after submission

## 🛠️ Technologies Used

* React
* JavaScript
* Bootstrap
* Browser LocalStorage

## 📚 Concepts Covered

### 1. useState

Separate states are used for each input:

```js
const [name, setname] = useState("");
const [email, setemail] = useState("");
const [password, setpassword] = useState("");
```

### 2. Controlled Inputs

Each input is connected with React state using `value` and `onChange`.

```jsx
<input
  value={name}
  onChange={(e) => setname(e.target.value)}
/>
```

### 3. Form Handling

The form submission is handled using `onSubmit`:

```jsx
<form onSubmit={formhanlding}>
```

`e.preventDefault()` prevents the browser from refreshing the page.

### 4. User Object

Form data is collected into an object:

```js
const user = {
  name,
  email,
  password
};
```

### 5. LocalStorage

Existing users are retrieved from localStorage:

```js
const users = JSON.parse(localStorage.getItem("users")) || [];
```

The new user is added to the array:

```js
users.push(user);
```

Finally, the updated array is saved:

```js
localStorage.setItem("users", JSON.stringify(users));
```

## 🔄 Data Flow

```text
Form Input
    ↓
React State
    ↓
User Object
    ↓
Users Array
    ↓
JSON.stringify()
    ↓
LocalStorage
```

When reading the data:

```text
LocalStorage
    ↓
getItem()
    ↓
JSON.parse()
    ↓
Users Array
```

## ▶️ Run the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## ⚠️ Note

This project is created for learning and practice. In a real application, sensitive information such as passwords should **not** be stored directly in browser `localStorage`. Proper authentication and a backend should be used.

## 🎯 Learning Goal

This project helps understand the basics of:

* React state management
* Form handling
* Controlled components
* JavaScript objects and arrays
* JSON
* LocalStorage
* Data persistence in the browser
