# React Axios Pagination App

## Project Overview

This project is a React application that fetches image data from an API using Axios and displays it in a card layout.

The application also implements pagination functionality where users can move between different pages using Previous and Next buttons.

## Features

* Fetch data from API using Axios
* Display images dynamically from API response
* Card-based UI layout
* Previous page button
* Next page button
* Page number based API calling

## Technologies Used

* React JS
* Axios
* JavaScript (ES6)
* CSS

## API Used

This project uses Picsum Photos API:

```bash
https://picsum.photos/v2/list?page=1&limit=30
```

## How It Works

### 1. State Management

The application uses React `useState`:

```javascript
const [data, setData] = useState([]);
const [page, setPage] = useState(1);
```

* `data` stores API response data.
* `page` stores the current page number.

### 2. API Calling

Axios is used to fetch data from the API:

```javascript
axios.get()
```

The API returns image details which are stored using:

```javascript
setData(res.data)
```

### 3. Pagination Logic

The application uses page numbers to fetch different data.

### Next Button

When the Next button is clicked:

```javascript
const newPage = page + 1;
setPage(newPage);
getData(newPage);
```

It increases the page number and fetches the next page data.

### Previous Button

When the Previous button is clicked:

```javascript
const newPage = page - 1;
setPage(newPage);
getData(newPage);
```

It decreases the page number and loads the previous page data.

## Project Flow

```
User Click Button
        |
        ↓
Page Number Changes
        |
        ↓
Axios API Request
        |
        ↓
API Response Received
        |
        ↓
setData Updates State
        |
        ↓
Images Render on UI
```

## Installation

Install project dependencies:

```bash
npm install
```

Install Axios:

```bash
npm install axios
```

Run the project:

```bash
npm run dev
```

## Future Improvements

* Add `useEffect` for automatic API calling
* Add loading spinner
* Add error handling
* Disable Previous button on first page
* Improve UI design
