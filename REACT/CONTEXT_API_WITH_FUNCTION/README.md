# React Context API Function Example

## 📌 Project Description

This project demonstrates how to pass a function through React Context API and use that function inside another component.

In this project, a function is created in the `App` component, passed through `UserContext.Provider`, and accessed in the `Profile` component using the `useContext()` Hook.

---

## 🚀 Concepts Covered

* `createContext()`
* Context Provider
* `useContext()` Hook
* Passing a function through Context
* Calling a Context function from a child component

---

## 📂 Project Flow

```text
App.jsx
   |
   | Create function
   ↓
name()
   |
   | Provider value={name}
   ↓
UserContext.Provider
   |
   | Pass function
   ↓
Profile.jsx
   |
   | useContext(UserContext)
   ↓
value
   |
   | onClick={value}
   ↓
Call Function
```

---

## 🧠 How It Works

The `App` component creates a function:

```jsx
function name() {
  console.log("sachin kumar");
}
```

The function is passed through the Context Provider:

```jsx
<UserContext.Provider value={name}>
  <Profile />
</UserContext.Provider>
```

The `Profile` component receives the function using:

```jsx
const value = useContext(UserContext);
```

The function is then called when the button is clicked:

```jsx
<button onClick={value}>
  Call Value
</button>
```

---

## 🎯 Output

When the button is clicked, the following message appears in the browser console:

```text
sachin kumar
```

---

## 📚 Learning Outcome

This project helps understand how React Context API can be used to share functions between components without passing them through props.
