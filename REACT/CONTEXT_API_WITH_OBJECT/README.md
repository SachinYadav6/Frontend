# React Context API Object Example

## 📌 Project Description

This project demonstrates how to use React Context API with an object value.

In this project, we create a Context using `createContext()`, share an object through `Provider`, and access the shared data in another component using `useContext()`.

Context API helps to share data between components without passing props manually.

---

## 🚀 Concepts Covered

- createContext()
- Context Provider
- useContext() Hook
- Passing object as Context value
- Sharing data between components without prop drilling

---



## 📂 Project Flow
    |
    | Provider value="Sachin Kumar"
    ↓
App.jsx

    |
    | Pass data to child component
    ↓
Profile.jsx

    |
    | useContext(Context object)
    ↓

|
| Provider value={object}
↓
|
| Pass object data
↓
|
| useContext(UserContext)
↓
Display User Data