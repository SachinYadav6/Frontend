# Redux Learning Project 🚀

This project is created to learn **Redux from zero to advanced level** using **React + Redux Toolkit**.

The goal is to understand Redux concepts practically with examples instead of only memorizing syntax.

---

## 📚 Learning Roadmap

### ✅ 1. What is Redux?

Redux is a state management library used to manage application state in a predictable way.

It is especially useful when multiple components need to access or update the same data.

Example:

```text
                 Redux Store
              ┌───────────────┐
              │ user          │
              │ cart          │
              │ products      │
              │ notifications │
              └───────┬───────┘
                      │
          ┌───────────┼───────────┐
          ↓           ↓           ↓
       Navbar      Products    Checkout
```

---

## ✅ 2. Redux Core Concepts

Redux has four important concepts:

### State

State is the actual application data.

Example:

```js
{
  count: 0
}
```

### Store

The Store is the central place where Redux-managed state is stored.

```text
Store
 └── State
```

### Action

An Action describes **what happened**.

Example:

```js
{
  type: "counter/increment"
}
```

### Reducer

A Reducer contains the logic that decides how the state should change based on an Action.

```text
Action
   ↓
Reducer
   ↓
New State
```

---

## 🔄 Redux Data Flow

The most important Redux flow:

```text
User
 ↓
Component
 ↓
dispatch(Action)
 ↓
Action
 ↓
Reducer
 ↓
State Update
 ↓
Redux Store
 ↓
Component
 ↓
UI Update
```

---

## ✅ 3. Redux Toolkit Setup

Modern Redux applications generally use **Redux Toolkit**.

Install the required packages:

```bash
npm install @reduxjs/toolkit react-redux
```

### Redux Toolkit

Redux Toolkit provides tools that make Redux development simpler and less repetitive.

Important APIs:

```text
configureStore()
createSlice()
createAsyncThunk()
RTK Query
```

---

# 🗂️ Project Structure

Current project structure:

```text
src
│
├── app
│   └── store.js
│
├── features
│   └── counter
│       └── counterSlice.js
│
├── App.jsx
└── main.jsx
```

---

# ⚙️ Counter Example

We created a simple Counter application to understand Redux.

## `store.js`

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

---

## `counterSlice.js`

```js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",

  initialState,

  reducers: {
    increment: (state) => {
      state.count += 1;
    },

    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
```

---

## `main.jsx`

Redux is connected to React using `Provider`.

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.jsx";
import { store } from "./app/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
```

---

## `App.jsx`

```jsx
import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter</h1>

      <h2>{count}</h2>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>

      <button onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  );
}

export default App;
```

---

# 🧠 Counter Flow

When the user clicks the `+` button:

```text
Click +
   ↓
dispatch(increment())
   ↓
increment Action
   ↓
counter Reducer
   ↓
count: 0 → 1
   ↓
Redux Store updates
   ↓
useSelector() gets new value
   ↓
React UI updates
```

When the user clicks `-`:

```text
Click -
   ↓
dispatch(decrement())
   ↓
decrement Action
   ↓
counter Reducer
   ↓
count: 1 → 0
   ↓
UI updates
```

---

# 📌 Important Things Learned

* Redux is used for state management.
* State represents application data.
* Store holds Redux-managed state.
* Actions describe what happened.
* Reducers contain state update logic.
* `dispatch()` sends an Action.
* Redux Toolkit is the modern way to write Redux.
* `configureStore()` creates the Redux Store.
* `createSlice()` helps create state, reducers, and actions together.
* `Provider` makes the Redux Store available to React components.

---

# 🛣️ Next Steps

The next lessons will cover:

* [ ] `configureStore()` in detail
* [ ] `createSlice()` in detail
* [ ] `useSelector()`
* [ ] `useDispatch()`
* [ ] Multiple slices
* [ ] Payload
* [ ] Async Redux
* [ ] `createAsyncThunk()`
* [ ] API handling
* [ ] RTK Query
* [ ] Middleware
* [ ] Redux DevTools
* [ ] Real-world CRUD project
* [ ] Advanced Redux patterns

---

## 🎯 Learning Goal

> **Zero se Redux samajhna → practically use karna → real-world applications mein confidently Redux Toolkit use karna.**

This project is a step-by-step journey from **Redux Beginner → Redux Hero 🚀**.
