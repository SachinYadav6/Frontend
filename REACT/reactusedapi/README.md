# REACTUSEDAPI_APP 🚀

## About Project

This is a React project where products are fetched from an API and displayed as cards.

The project uses:
- React JS
- useState Hook
- Fetch API
- Component Based Structure
- CSS Flexbox


## Features

- Fetch product data from API
- Display products in card format
- Show product image and title
- Responsive card layout
- Dynamic rendering using map()


## API Used

DummyJSON Products API

API URL:

https://dummyjson.com/products?limit=90


## How It Works

1. User clicks on the "getdata" button.
2. Fetch API sends a request to the product API.
3. API returns product data in JSON format.
4. Response is converted into JavaScript object using response.json().
5. Products array is extracted using:

```javascript
data.products