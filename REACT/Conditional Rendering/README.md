# React Conditional Rendering

```jsx
const [isLogin, setLogin] = useState(false)
```

* `isLogin` → login status
* `setLogin` → login status change karta hai
* `false` → initially user logged out hai

### Ternary Operator

```jsx
{isLogin ? <h1>Welcome</h1> : <h1>Please Login</h1>}
```

Agar:

```text
isLogin === true
→ Welcome
```

Agar:

```text
isLogin === false
→ Please Login
```

### Login / Logout Button

```jsx
{isLogin ? (
  <button onClick={() => setLogin(false)}>
    Logout
  </button>
) : (
  <button onClick={() => setLogin(true)}>
    Login
  </button>
)}
```

Agar `isLogin` true:

```text
Welcome
Logout button
```

Agar `isLogin` false:

```text
Please Login
Login button
```

### Main Logic

```text
isLogin ? true wala UI : false wala UI
```

Ya simple:

```text
true
→ Welcome + Logout

false
→ Please Login + Login
```

**Conditional Rendering = condition ke according different UI dikhana.**
