# 🖼️ Gallery Collection

A React project that fetches product data from an API and displays it as a collection of product cards.

## 🚀 Features

* Fetch products using Axios
* Reusable `Card` component
* Display product image, title, description, price, rating, stock and brand
* Search products by title
* Filter products based on user search

## 🛠️ Technologies Used

* React.js
* JavaScript
* Axios
* CSS
* DummyJSON API

## 🔗 API

`https://dummyjson.com/products`

## ▶️ Run Project

```bash
npm install
npm run dev
```

## 🔍 Search Logic

Products are filtered by checking whether the user's search text exists inside the product title.

```js
datacollection.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
});
```

## 📌 Future Improvements

* Add to Cart
* Cart page
* Increase/decrease quantity
* Remove product from cart
* Total cart price

## 👨‍💻 Author

**Sachin**
