# React Form Handling

A simple React project that demonstrates **form handling, controlled inputs, validation, state management, and localStorage** in React.

## 📌 About the Project

This project contains a user registration form with:

* Name
* Email
* Password
* Submit button
* Reset button

The form data is managed using React's **`useState`** and handled using `onChange` and `onSubmit`.

## 🚀 Features

* Controlled form inputs
* `useState` for form data
* `onChange` for input handling
* `onSubmit` for form submission
* `preventDefault()` to prevent page reload
* Form validation using HTML attributes
* User object creation
* Data storage using `localStorage`
* `JSON.stringify()` and `JSON.parse()`
* Reset form functionality
* Submitted user data displayed on the page

## 🛠️ Technologies Used

* React.js
* JavaScript
* JSX
* React Hooks
* `useState`
* HTML Form
* `localStorage`

## ⚙️ How It Works

### 1. State Management

Three states are created for the form inputs:

```jsx
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
```

These states store the current values of the inputs.

### 2. `handleChange`

`handleChange` is used to handle all input changes:

```jsx
function handleChange(e) {
  const { name, value } = e.target

  if (name === "name") {
    setName(value)
  }

  if (name === "email") {
    setEmail(value)
  }

  if (name === "password") {
    setPassword(value)
  }
}
```

The `name` attribute identifies which input is being changed.

```text
name="name"
→ setName()

name="email"
→ setEmail()

name="password"
→ setPassword()
```

### 3. Form Handling

The form uses:

```jsx
<form onSubmit={formHandling}>
```

`formHandling` runs when the form is submitted.

```jsx
function formHandling(e) {
  e.preventDefault()
}
```

`preventDefault()` prevents the browser from refreshing the page.

### 4. Creating User Object

The form values are stored inside an object:

```jsx
const user = {
  name,
  email,
  password
}
```

### 5. localStorage

The user object is stored in browser storage:

```jsx
localStorage.setItem(
  "user",
  JSON.stringify(user)
)
```

`localStorage` stores data as a string, so `JSON.stringify()` converts the object into a string.

To retrieve the data:

```jsx
const users = JSON.parse(
  localStorage.getItem("user")
)
```

```text
JSON.stringify()
Object → String

JSON.parse()
String → Object
```

### 6. Form Validation

HTML validation is used:

```jsx
required
minLength={3}
maxLength={20}
```

For the password:

```jsx
required
minLength={6}
```

This prevents invalid form data from being submitted.

### 7. Reset Form

The Reset button clears all form states:

```jsx
setName("")
setEmail("")
setPassword("")
setSubmittedUser(null)
```

### 8. Display Submitted Data

After submission, the user object is stored in `submittedUser`:

```jsx
{submittedUser && (
  <div>
    <h2>{submittedUser.name}</h2>
    <p>{submittedUser.email}</p>
    <p>{submittedUser.password}</p>
  </div>
)}
```

## 🔄 Complete Flow

```text
User types
    ↓
onChange
    ↓
handleChange
    ↓
useState
    ↓
Submit
    ↓
formHandling
    ↓
preventDefault()
    ↓
Create user object
    ↓
localStorage
    ↓
Display submitted data
```

## 🎯 Learning Goals

This project is useful for learning:

1. React `useState`
2. Controlled components
3. `onChange`
4. `onSubmit`
5. `preventDefault()`
6. Form validation
7. Object creation
8. `localStorage`
9. `JSON.stringify()`
10. `JSON.parse()`
11. Conditional rendering
12. Reset functionality

## ▶️ Run the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## 👨‍💻 Author

Made with ❤️ while learning React.
