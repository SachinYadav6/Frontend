# React Router Nested Routing Project

A React project demonstrating routing and nested routing using React Router DOM.

## Features

- Home page routing
- About page routing
- Contact page routing
- Product page routing
- Nested routing using Outlet
- Men and Women product pages

## Technologies Used

- React
- React Router DOM
- Vite
- CSS

## Installation

```bash
npm install
```

## Run Project

```bash
npm run dev
```

## Routing Structure

```
/home
/about
/contact

/product
    |
    ├── /product/men
    |
    └── /product/women
```

## Nested Routing Concept

Product is the parent route.

```
Product.jsx
      |
      ↓
   <Outlet />
      |
      ↓
 Men.jsx / Women.jsx
```

## Project Structure

```
src
│
├── App.jsx
├── main.jsx
│
└── pages
    ├── Home.jsx
    ├── About.jsx
    ├── Contact.jsx
    ├── Product.jsx
    ├── Men.jsx
    └── Women.jsx
```

## Learning Outcome

- React Router setup
- Link component navigation
- Routes and Route usage
- Nested routing with Outlet
- Creating reusable page components