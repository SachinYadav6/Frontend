# React API Fetching with Loading and Error Handling

A simple React project demonstrating how to fetch product data from an API using `useEffect` and handle **loading, error, and success states**.

## 🚀 Features

* Fetch products from an API
* Use `useEffect` for API calls
* Store API data using `useState`
* Loading state handling
* Error state handling
* Display product categories
* Render API data using `.map()`

## 🛠️ Technologies Used

* React
* JavaScript
* Fetch API
* DummyJSON API

## 📚 Concepts Covered

### 1. useState

Three states are used:

```js
const [data, setdata] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
```

* `data` → stores products
* `loading` → tracks whether API data is loading
* `error` → stores an error message if the request fails

### 2. useEffect

`useEffect` is used to make the API request when the component mounts:

```js
useEffect(() => {
  getData();
}, []);
```

The empty dependency array `[]` makes the effect run once after the component mounts.

### 3. Fetch API

Products are fetched using `fetch()`:

```js
const res = await fetch("https://dummyjson.com/products");
```

The response is converted into JSON:

```js
const data = await res.json();
```

### 4. Storing API Data

The products array from the API response is stored in React state:

```js
setdata(data.products);
```

### 5. Loading State

Initially, loading is `true`:

```js
const [loading, setLoading] = useState(true);
```

After the API request finishes:

```js
setLoading(false);
```

While loading, the UI displays:

```jsx
<h1>Loading...</h1>
```

### 6. Error Handling

The API request is wrapped inside `try...catch`:

```js
try {
  // API request
} catch (error) {
  setError("Something went wrong");
  setLoading(false);
}
```

If the request fails, an error message is displayed.

### 7. Rendering API Data

The products are displayed using `.map()`:

```jsx
data.map((elem) => (
  <h1 key={elem.id}>{elem.category}</h1>
))
```

The `key` prop helps React identify each rendered element.

## 🔄 UI Flow

```text
Component Mount
       ↓
   useEffect()
       ↓
    fetch API
       ↓
   ┌─── Success ───┐
   ↓               ↓
setdata()       setLoading(false)
   ↓
Display Products

       OR

    API Error
       ↓
setError()
       ↓
setLoading(false)
       ↓
Display Error
```

## 🌐 API Used

This project uses the DummyJSON Products API.

Endpoint:

```text
https://dummyjson.com/products
```

## ▶️ Run the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local development URL shown in the terminal.

## 🎯 Learning Goal

This project helps practice:

* `useEffect`
* `useState`
* `fetch()`
* `async/await`
* API requests
* Loading states
* Error handling
* `.map()`
* React `key` prop
* Conditional rendering
