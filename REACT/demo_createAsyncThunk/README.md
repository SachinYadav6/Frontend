# Redux Toolkit + createAsyncThunk Practice  

A practice project created to understand and learn **Redux Toolkit**, **React Redux**, and **createAsyncThunk** with API fetching.

##  What I Learned

In this practice, I learned:

- Redux Toolkit setup
- `configureStore`
- `createSlice`
- Redux state management
- `useSelector()`
- `useDispatch()`
- `createAsyncThunk`
- API data fetching
- `pending`, `fulfilled`, and `rejected`
- `extraReducers`
- `action.payload`
- Loading state
- Error handling
- Multiple Redux states
- Connecting Redux Store with React using `Provider`

##  createAsyncThunk Flow

```text
React Component
      ↓
dispatch(fetchUsers())
      ↓
createAsyncThunk
      ↓
API Request
      ↓
   pending
      ↓
loading = true
      ↓
 ┌───────────────┐
 ↓               ↓
fulfilled      rejected
 ↓               ↓
data            error
 ↓               ↓
action.payload  action.error
 ↓               ↓
Redux Store
      ↓
useSelector()
      ↓
React UI

 ##  API Used
 https://jsonplaceholder.typicode.com/users

 ##  Technologies Used

React
Redux Toolkit
React Redux
JavaScript
Vite
REST API

## Project Structure

src/
├── redux/
│   ├── userSlicer.js
│   └── store.js
├── App.jsx
├── main.jsx
└── index.css

## Features

Fetch users from API
Display users on the screen
Show loading state while fetching data
Handle API errors
Manage API data using Redux Toolkit
Practice createAsyncThunk
Practice useSelector() and useDispatch()

##  This project was created for learning and practicing Redux Toolkit and createAsyncThunk.
