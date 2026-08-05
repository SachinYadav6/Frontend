import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";
import "./css/dark-mode.css";
import CartProvider from "./Context/CartContext";
import AuthProvider from "./Context/AuthContext";
import WishlistProvider from "./Context/WishlistContext";
import ThemeProvider from "./Context/ThemeContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(


<BrowserRouter>


<ThemeProvider>

<WishlistProvider>

<AuthProvider>

<CartProvider>


<App/>


</CartProvider>

</AuthProvider>

</WishlistProvider>

</ThemeProvider>


</BrowserRouter>


);