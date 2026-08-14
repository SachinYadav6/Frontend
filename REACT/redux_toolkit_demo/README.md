# Redux Toolkit Demo 🚀

A simple React project to understand and practice **Redux Toolkit** and **React Redux**.

## 📚 What I Learned

In this project, I learned:

- Redux Toolkit setup
- `configureStore`
- `createSlice`
- Redux `state`
- Redux `actions`
- `dispatch()`
- `useSelector()`
- `useDispatch()`
- Multiple slices
- Passing data using `action.payload`

## 🛠️ Technologies Used

- React
- Redux Toolkit
- React Redux
- Vite
- JavaScript

## 📂 Project Structure

```text
src/
├── redux/
│   ├── counterSlicer.js
│   ├── userSlicer.js
│   └── store.js
├── App.jsx
├── main.jsx
└── index.css
```
## Redux Flow
React Component
      ↓
   dispatch()
      ↓
    Action
      ↓
    Reducer
      ↓
    Store
      ↓
   New State
      ↓
  useSelector()
      ↓
React Component

## 🎯 Features
. Increment counter
. Decrement counter
. Change user name using payload
. Increment user age
. Multiple Redux slices
. Centralized state management 

⭐ This project was created for learning and practicing Redux Toolkit.