# React Revision — useState Hook

## 1. useState Kya Hai?

`useState` React ka ek Hook hai jo component ke andar **data/state ko store aur update** karne ke liye use hota hai.

```jsx
import { useState } from "react";
```

Basic syntax:

```jsx
const [state, setState] = useState(initialValue);
```

Example:

```jsx
const [count, setCount] = useState(0);
```

Yahan:

* `count` → current state
* `setCount` → state update karne ka function
* `0` → initial value

---

## 2. State Update

State ko directly change nahi karna chahiye.

```jsx
count = count + 1; // ❌
```

Setter function use karo:

```jsx
setCount(count + 1); // ✅
```

State update hone par React component ko re-render karta hai.

---

## 3. Counter Example

```jsx
const [count, setCount] = useState(0);
```

Increase:

```jsx
setCount(count + 1);
```

Decrease:

```jsx
if (count > 0) {
  setCount(count - 1);
}
```

Reset:

```jsx
setCount(0);
```

---

## 4. Functional State Update

Jab new state **previous state par depend** karti hai, functional update use karna best practice hai.

```jsx
setCount(prev => prev + 1);
```

Yahan `prev` previous state ki value hai.

Example:

```jsx
setCount(prev => prev + 1);
```

Agar current count `5` hai:

```text
prev = 5
prev + 1 = 6
```

---

## 5. Multiple State Updates

Functional update multiple updates ke case mein useful hai.

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Isse count 3 se increase hoga.

---

## 6. `count + 1` vs `prev + 1`

Normal update:

```jsx
setCount(count + 1);
```

Functional update:

```jsx
setCount(prev => prev + 1);
```

### Rule

```text
Agar new state previous state par depend karti hai
                ↓
       prev => ... use karo
```

Examples:

```jsx
setCount(prev => prev + 1);
setCount(prev => prev - 1);
```

---

## 7. State Different Data Types

`useState` sirf numbers ke liye nahi hai.

### String

```jsx
const [name, setName] = useState("");
```

### Boolean

```jsx
const [isOpen, setIsOpen] = useState(false);
```

### Array

```jsx
const [items, setItems] = useState([]);
```

### Object

```jsx
const [user, setUser] = useState({
  name: "",
  age: 0
});
```

---

## 8. Important Rules

* `useState` ko component ke andar use karte hain.
* State ko directly modify nahi karna.
* State update ke liye setter function use karo.
* State update hone par component re-render hota hai.
* Previous state par depend karne wali update ke liye functional update use karo.
* `useState` different types ka data store kar sakta hai.

---

## Quick Revision

```jsx
const [count, setCount] = useState(0);
```

```text
count       → current value
setCount    → update function
0           → initial value
```

Most important:

```jsx
setCount(prev => prev + 1);
```

**Previous state par depend karna ho → `prev => ...`**
