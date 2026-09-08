# 🗑️ React DELETE API Practice

This project is a simple practice project to understand how to **delete existing data using a DELETE API request in React**.

## 🚀 What I Learned

* `fetch()` API
* `async/await`
* `DELETE` HTTP method
* `response.json()`
* API response handling
* `e.preventDefault()`
* Form submit handling

## 🔥 How It Works

When the **Delete User** button is clicked:

```text
Button Click
    ↓
Form Submit
    ↓
DELETE Request
    ↓
https://dummyjson.com/users/1
    ↓
API Response
    ↓
Console
```

## 💻 Example

```js
const res = await fetch("https://dummyjson.com/users/1", {
  method: "DELETE"
});

const data = await res.json();

console.log(data);
```

## 🌐 API Used

**DummyJSON Users API**

The project uses the DummyJSON API to practice deleting a user.

## 📚 HTTP Methods Practiced

| Method | Purpose                    |
| ------ | -------------------------- |
| GET    | Data read karna            |
| POST   | New data create karna      |
| PATCH  | Existing data update karna |
| DELETE | Existing data delete karna |

## 🎯 Goal

The main goal of this project is to understand **how DELETE requests work in React** and how to handle the API response.

---

### 👨‍💻 Author

**Sachin Yadav**

