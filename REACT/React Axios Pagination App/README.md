# React Axios Pagination App

## Project Overview

React Axios Pagination App is a React project where API data is fetched using Axios and displayed in a card layout.

This project implements pagination functionality using page numbers with Previous and Next buttons.

## Features

* Fetch API data using Axios
* Display images dynamically
* Pagination with Previous and Next buttons
* Page number based API calling
* Loading state handling
* Responsive card layout

## Technologies Used

* React JS
* Axios
* JavaScript
* CSS

## API Used

Picsum Photos API:

```
https://picsum.photos/v2/list?page=1&limit=30
```

## Concepts Used

### useState

Used for managing:

* API data
* Current page number
* Loading state

Example:

```javascript
const [data, setData] = useState([]);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(false);
```

### useEffect

Used to call API whenever page number changes.

```javascript
useEffect(() => {
  getData();
}, [page]);
```

## Pagination Logic

### Next Button

Increases page number:

```javascript
setPage(page + 1);
```

### Previous Button

Decreases page number:

```javascript
setPage(page - 1);
```

When page changes, useEffect automatically fetches new data.

## Project Flow

```
User Click Button
        |
        ↓
Page Number Changes
        |
        ↓
useEffect Runs
        |
        ↓
Axios API Call
        |
        ↓
Data Stored in State
        |
        ↓
Cards Render on Screen
```

## Installation

Install dependencies:

```
npm install
```

Install Axios:

```
npm install axios
```

Run project:

```
npm run dev
```

## Future Improvements

* Add better loading animation
* Add error handling
* Disable previous button on first page
* Improve UI design
