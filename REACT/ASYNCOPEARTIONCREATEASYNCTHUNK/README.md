# Redux Toolkit - Async API Practice

This project is a practice project for learning **Redux Toolkit**, **createAsyncThunk**, asynchronous API operations, and handling API data in React.

## What I Learned

* `configureStore`
* `createSlice`
* `createAsyncThunk`
* `useDispatch`
* `useSelector`
* `useEffect`
* `extraReducers`
* `builder.addCase()`
* `pending`
* `fulfilled`
* `rejected`
* `action.payload`
* API data handling
* Loading and error states
* Rendering API data with `.map()`
* Responsive product-card UI

## API Used

DummyJSON Products API:

`https://dummyjson.com/products`

The API response contains a `products` array:

```js
{
    products: [
        {
            id: 1,
            title: "Product Name",
            description: "Product description",
            category: "beauty",
            price: 9.99,
            rating: 4.5,
            brand: "Brand Name",
            thumbnail: "image-url"
        }
    ]
}
```

## Async Flow

```text
React Component
      ↓
dispatch(fetchProducts())
      ↓
createAsyncThunk
      ↓
pending
      ↓
API Request
      ↓
fulfilled / rejected
      ↓
extraReducers
      ↓
builder.addCase()
      ↓
Redux State Update
      ↓
useSelector()
      ↓
React Re-render
      ↓
Product Cards
```

## Main Concept

The main concept practiced in this project is:

```text
API
→ createAsyncThunk
→ pending / fulfilled / rejected
→ extraReducers
→ Redux State
→ useSelector
→ React UI
```

This project is part of my React + Redux Toolkit learning practice.
