# React API Form Handling

A simple React project that demonstrates how to handle a form and send form data to an API using the **Fetch API**.

## 🚀 Features

* React form handling
* Controlled inputs using `useState`
* Async form submission
* POST request using `fetch()`
* Sending JSON data to an API
* Converting age from string to number
* Reading JSON response from the API
* Displaying API response in the console

## 🛠️ Technologies Used

* React
* JavaScript
* Fetch API
* DummyJSON API

## 📚 Concepts Covered

### 1. useState

React state is used to store the name and age entered by the user.

```js
const [name, setname] = useState("");
const [age, setage] = useState("");
```

### 2. Controlled Inputs

The input values are controlled by React state.

```jsx
<input
  type="text"
  value={name}
  onChange={(e) => setname(e.target.value)}
/>
```

```jsx
<input
  type="number"
  value={age}
  onChange={(e) => setage(e.target.value)}
/>
```

### 3. Form Submission

The form uses `onSubmit` to call the `formhandling` function.

```jsx
<form onSubmit={formhandling}>
```

`e.preventDefault()` prevents the browser from refreshing the page.

### 4. Creating an Object

The form data is converted into a JavaScript object before sending it to the API.

```js
const user = {
  name,
  age: Number(age)
};
```

`Number(age)` converts the input value from a string into a number.

### 5. Async/Await

The `formhandling` function is asynchronous because an API request takes time.

```js
async function formhandling(e) {
```

The `await` keyword waits for the API response:

```js
const res = await fetch(...);
```

### 6. POST Request

A POST request is used to send the user data to the API.

```js
const res = await fetch("https://dummyjson.com/users/add", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
});
```

### 7. JSON Response

The API response is converted into a JavaScript object using:

```js
const data = await res.json();
```

Then the response is displayed in the console:

```js
console.log(data);
```

## 🔄 Data Flow

```text
User enters Name & Age
        ↓
React useState
        ↓
Create User Object
        ↓
JSON.stringify()
        ↓
POST Request
        ↓
DummyJSON API
        ↓
API Response
        ↓
res.json()
        ↓
console.log(data)
```

## 🌐 API Used

This project uses the DummyJSON users API to demonstrate a POST request.

Endpoint:

```text
https://dummyjson.com/users/add
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

Open the local development URL shown in the terminal.

## 🎯 Learning Goal

This project is created to practice:

* React form handling
* `useState`
* Controlled components
* JavaScript objects
* `fetch()`
* POST requests
* `async/await`
* JSON.stringify()
* `response.json()`
* Working with APIs
