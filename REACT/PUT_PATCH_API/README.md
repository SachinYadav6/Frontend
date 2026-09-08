# 🔄 React PATCH API Practice

This project is a simple practice project to understand how to **update existing data using a PATCH API request in React**.

## 🚀 What I Learned

* `fetch()` API
* `async/await`
* `PATCH` HTTP method
* `Content-Type: application/json`
* `JSON.stringify()`
* `response.json()`
* Form handling
* Controlled inputs
* `useState`
* Converting input value using `Number()`

## 🔥 How It Works

The user enters a **name** and **age** in the form.

When the form is submitted:

```text id="q4x8pz"
Form Submit
    ↓
Create User Object
    ↓
JSON.stringify(user)
    ↓
PATCH Request
    ↓
Update User ID 1
    ↓
API Response
    ↓
Console
```

## 💻 PATCH Request

```js id="7g2vka"
const user = {
  name,
  age: Number(age)
};

const res = await fetch("https://dummyjson.com/users/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
});

const data = await res.json();

console.log(data);
```

## 🌐 API Used

**DummyJSON Users API**

The project uses the DummyJSON API to practice updating an existing user.

## 📚 HTTP Methods

| Method | Purpose                    |
| ------ | -------------------------- |
| GET    | Data read karna            |
| POST   | New data create karna      |
| PATCH  | Existing data update karna |
| DELETE | Existing data delete karna |

## 🎯 Goal

The main goal of this project is to understand **how PATCH requests work in React** and how form data can be sent to an API to update existing data.

---

### 👨‍💻 Author

**Sachin Yadav**
