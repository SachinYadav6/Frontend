# React Input Handling

### 1. useState

```jsx
const [value, setValue] = useState("");
```

* `value` → input ki current value
* `setValue` → value update karta hai
* `""` → initial value

### 2. Input

```jsx
<input
  value={value}
  onChange={(e) => {
    setValue(e.target.value);
  }}
/>
```

* `value={value}` → input ko state se connect karta hai.
* `onChange` → jab user type karta hai tab chalta hai.
* `e.target.value` → user ne jo type kiya hai woh value.

### 3. Length

```jsx
value.length
```

Input ki length deta hai.

Example:

```text
value = "Sachin"
value.length = 6
```

### 4. Reset

```jsx
setValue("");
```

Input ko empty kar deta hai.

### Flow

```text
User type
↓
onChange
↓
e.target.value
↓
setValue()
↓
UI update
```

**Main concept:** React mein input ko `useState` ke through control karna = **Controlled Input**.
