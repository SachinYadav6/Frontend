# React Context API Example

## 📌 Project Description

This project is a simple example of React Context API.

In this project, we create a Context using `createContext()`, provide data using `Provider`, and access that data in another component using `useContext()`.

## 🚀 Concepts Covered

- createContext()
- Context Provider
- useContext() Hook
- Sharing data between components without prop drilling

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
    | useContext(UserContext)
    ↓
Display User Data