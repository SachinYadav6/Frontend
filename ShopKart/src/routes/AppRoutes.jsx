import { Routes, Route } from "react-router-dom";


import Home from "../Pages/Home";
import Product from "../Pages/Product";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";

import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

import Checkout from "../Pages/Checkout";
import OrderSuccess from "../Pages/OrderSuccess";
import MyOrders from "../Pages/MyOrders";
import Wishlist from "../Pages/Wishlist";
import Profile from "../Pages/Profile";

import NotFound from "../Pages/NotFound";


import ProtectedRoute from "./ProtectedRoute";






function AppRoutes(){


return(


<Routes>





{/* Public Routes */}




<Route

path="/"

element={<Home/>}

/>







<Route

path="/products"

element={<Product/>}

/>







<Route

path="/product/:id"

element={<ProductDetails/>}

/>







<Route

path="/cart"

element={<Cart/>}

/>







<Route

path="/login"

element={<Login/>}

/>







<Route

path="/signup"

element={<Signup/>}

/>









{/* Protected Routes */}







<Route

path="/checkout"

element={

<ProtectedRoute>

<Checkout/>

</ProtectedRoute>

}

/>








<Route

path="/order-success"

element={

<ProtectedRoute>

<OrderSuccess/>

</ProtectedRoute>

}

/>








<Route

path="/orders"

element={

<ProtectedRoute>

<MyOrders/>

</ProtectedRoute>

}

/>








<Route

path="/wishlist"

element={

<ProtectedRoute>

<Wishlist/>

</ProtectedRoute>

}

/>








<Route

path="/profile"

element={

<ProtectedRoute>

<Profile/>

</ProtectedRoute>

}

/>









{/* 404 Page */}






<Route

path="*"

element={<NotFound/>}

/>







</Routes>


)


}



export default AppRoutes;