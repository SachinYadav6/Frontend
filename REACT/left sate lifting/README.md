# React Lifting State Up

This project demonstrates the **Lifting State Up** concept in React.

## 📌 What is Lifting State Up?

When two or more components need to share the same state, we move the state to their **common parent component**.

In this example, the `count` state is stored inside the `App` component. The state and its updater function are then passed to child components using props.

## 📂 Components

### `App.jsx`

```jsx
import { useState } from "react";
import ChildA from "./ChildA";
import { ChildB } from "./ChildA";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChildA setCount={setCount} />
      <ChildB count={count} />
    </>
  );
}
```

The `App` component is the **common parent**.

It creates the state:

```jsx
const [count, setCount] = useState(0);
```

Then:

* `setCount` is passed to `ChildA`.
* `count` is passed to `ChildB`.

## 👶 ChildA

```jsx
export default function ChildA({ setCount }) {
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      Add
    </button>
  );
}
```

`ChildA` receives the `setCount` function through props.

When the **Add** button is clicked, the count is increased:

```jsx
setCount((prev) => prev + 1)
```

`ChildA` does not own the `count` state. It only receives the function needed to update the state.

## 👶 ChildB

```jsx
export function ChildB({ count }) {
  return <h2>Count: {count}</h2>;
}
```

`ChildB` receives the current `count` value through props and displays it.

## 🔄 Data Flow

```text
                App
          ┌──────────────┐
          │ count        │
          │ setCount     │
          └──────┬───────┘
                 │
        ┌────────┴────────┐
        ↓                 ↓
     ChildA            ChildB
        │                 │
    setCount             count
        │                 │
        ↓                 ↓
    Update State      Display Count
```

## 🧠 How It Works

1. `App` creates the `count` state.
2. `App` passes `setCount` to `ChildA`.
3. `App` passes `count` to `ChildB`.
4. User clicks the **Add** button in `ChildA`.
5. `ChildA` calls `setCount()`.
6. The `count` state in `App` is updated.
7. React re-renders the components.
8. `ChildB` receives the updated `count` and displays it.

## 🎯 Main Concept

The important point is:

> **State is kept in the common parent and shared with child components through props.**

This is called **Lifting State Up**.

## 🛠️ React Concepts Used

* `useState`
* Props
* Lifting State Up
* Passing functions as props
* Parent-to-child data flow
* State updates
* Component re-rendering

## ⚠️ Small Cleanup

`ChildA` file mein:

```jsx
import { useState } from "react";
```

ki zarurat nahi hai, kyunki `ChildA` directly `useState` use nahi kar raha.

Similarly, `App.jsx` mein:

```jsx
ChildA;
```

ki bhi zarurat nahi hai. Is line ko remove kar sakte ho.

### Clean `App.jsx`

```jsx
import { useState } from "react";
import ChildA, { ChildB } from "./ChildA";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChildA setCount={setCount} />
      <ChildB count={count} />
    </>
  );
}
```
