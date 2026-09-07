# React useEffect API POST Request

A simple React project demonstrating how to use **useEffect**, **useState**, and the **Fetch API** to send user data to an API when the component loads.

## 🚀 Features

* React `useState` for storing API response
* React `useEffect` for running API request on component mount
* POST request using `fetch()`
* Sending JavaScript object as JSON
* Handling asynchronous operations with `async/await`
* Error handling using `try...catch`
* Displaying API response data in the UI

## 🛠️ Technologies Used

* React
* JavaScript
* Fetch API
* DummyJSON API

## 📚 Concepts Covered

### 1. useState

State is used to store the response received from the API.

```js
const [data, setdata] = useState();
```

After receiving the response, the state is updated:

```js
setdata(data);
```

### 2. User Object

A JavaScript object is created containing user information:

```js
let user = {
  name: 'sachin kumar',
  age: 25,
  skills: ["html", "css", "javascript", "java", "react", "dsa"]
};
```

### 3. useEffect

`useEffect` is used to execute the API request when the component loads.

```js
useEffect(() => {
  // API request
}, []);
```

The empty dependency array `[]` means the effect runs once after the component mounts.

### 4. Async/Await

An asynchronous function is created inside `useEffect`:

```js
async function addUser() {
```

`await` waits for the API response:

```js
const res = await fetch(...);
```

### 5. POST Request

The user object is sent to the API using a POST request:

```js
const res = await fetch("https://dummyjson.com/users/add", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
});
```

### 6. JSON.stringify()

Before sending the object to the API, it is converted into a JSON string:

```js
JSON.stringify(user)
```

### 7. Reading API Response

The response is converted back into a JavaScript object:

```js
const data = await res.json();
```

### 8. Error Handling

`try...catch` is used to handle errors:

```js
try {
  // API request
} catch (error) {
  console.log(error);
}
```

### 9. Optional Chaining

The API response ID is displayed using optional chaining:

```jsx
<h1>{data?.id}</h1>
```

`?.` prevents an error if `data` is still `undefined`.

## 🔄 Data Flow

```text
Component Mount
      ↓
useEffect()
      ↓
addUser()
      ↓
fetch() POST Request
      ↓
DummyJSON API
      ↓
res.json()
      ↓
setdata(data)
      ↓
data?.id displayed in UI
```

## 🌐 API Used

This project uses the DummyJSON API for demonstrating a POST request.

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

## 🎯 Learning Goal

This project helps practice:

* `useEffect`
* `useState`
* API requests
* POST method
* `fetch()`
* `async/await`
* `try...catch`
* `JSON.stringify()`
* `response.json()`
* Optional chaining
* Updating React state with API data
