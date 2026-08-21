# React useEffect API Fetch Project

## 📌 Project Overview

This is a simple React.js project created to understand and practice the **`useEffect` Hook**.

In this project, `useEffect` is used to fetch user data from an API after the component renders. **Axios** is used to make the API request, and the usernames received from the API are displayed on the screen.

## 🎯 Main Concept

The main focus of this project is the **React `useEffect` Hook**.

`useEffect` is used to perform side effects in a React component, such as:

* Fetching data from an API
* Setting up event listeners
* Working with timers
* Interacting with external resources

In this project, `useEffect` is used to fetch data from an API.

## 🛠️ Technologies Used

* React.js
* JavaScript
* Axios
* React Hooks
* JSONPlaceholder API

## ⚙️ How `useEffect` Works

The project uses:

```js
useEffect(() => {
    getData();
}, []);
```

The empty dependency array `[]` means that the effect runs **once after the initial render** of the component.

Inside the `useEffect`, the `getData()` function is called. This function makes an API request using Axios and fetches the users' data.

## 🔄 Project Flow

```text
Component Renders
       ↓
useEffect Executes
       ↓
getData() is Called
       ↓
Axios Sends API Request
       ↓
User Data is Received
       ↓
State is Updated
       ↓
Usernames are Displayed on the Screen
```

## 📚 What I Learned

Through this project, I learned:

* How to use the `useEffect` Hook
* How the empty dependency array `[]` works
* How to make an API call after component rendering
* How to use Axios for API requests
* How to work with `async/await`
* How to store API data in React state
* How to display API data using the `map()` method
* How to handle loading and error states

## 🔗 API Used

This project uses the **JSONPlaceholder Users API** for fetching sample user data.

## 🎓 Purpose of the Project

The main purpose of this project is to understand how **`useEffect` works with API calls in React** and how fetched data can be stored and displayed using React state.
