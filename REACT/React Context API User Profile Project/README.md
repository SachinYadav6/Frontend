# React Context API User Profile Project

A React project built to understand and practice **Context API**, `createContext`, `useContext`, and `useState` by creating a simple user profile data flow.

## 📌 Project Name

**React Context API User Profile Project**

## 🎯 Project Goal

The main goal of this project is to understand how user data can be shared between React components using **Context API**, without passing the data through props.

This project also demonstrates how a function stored inside a Context object can return user-specific data and how that returned data can be stored in component state.

## 🛠️ Technologies Used

* React
* JavaScript
* Vite
* React Context API
* `createContext`
* `useContext`
* `useState`

## 📂 Project Structure

```text
React Context API User Profile Project/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── Create.jsx
│   └── Profile.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## 🔄 How the Project Works

### 1. Create Context

`Create.jsx` creates the Context:

```js
import { createContext } from "react";

const UserContext = createContext();

export default UserContext;
```

### 2. Provide User Data

`App.jsx` contains the user object and provides it through `UserContext.Provider`.

The user object contains:

* `name`
* `gmail`
* `userdata()` function

The `userdata()` function returns a new object containing:

```js
{
  username: this.name,
  userGmail: this.gmail
}
```

### 3. Consume Context

`Profile.jsx` accesses the Context using:

```js
const value = useContext(UserContext);
```

### 4. Store Returned Data

When the button is clicked:

```js
setobject(value.userdata())
```

The object returned by `userdata()` is stored in component state.

### 5. Display User Data

The stored data is displayed using:

```jsx
<h1>{object.username}</h1>
<h2>{object.userGmail}</h2>
```

## 🧠 React Concepts Practiced

### Context API

Used to share user data between components without prop drilling.

### `createContext()`

Used to create the `UserContext`.

### `useContext()`

Used in the `Profile` component to access the data provided by `UserContext.Provider`.

### `useState()`

Used to store the object returned from the `userdata()` function.

### Object Methods and `this`

The project also practices using a function inside an object and accessing the object's properties with `this`.

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

## 📚 Learning Outcome

After completing this project, I understand:

* How to create a React Context
* How to provide data using Context Provider
* How to consume Context using `useContext`
* How to store returned data using `useState`
* How functions can be stored inside objects
* How `this` accesses properties of the same object
* How Context API can reduce the need for prop drilling

## 👨‍💻 Author

**Pradeep Kumar Yadav**
