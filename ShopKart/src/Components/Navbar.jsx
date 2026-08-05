import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { CartContext } from "../Context/CartContext";
import { AuthContext } from "../Context/AuthContext";
import { WishlistContext } from "../Context/WishlistContext";
import { ThemeContext } from "../Context/ThemeContext";

import "../css/Navbar.css";


function Navbar(){


const [menuOpen,setMenuOpen] = useState(false);



const { cart } = useContext(CartContext);


const { user, logout } = useContext(AuthContext);


const { wishlist } = useContext(WishlistContext);


const { darkMode, toggleTheme } = useContext(ThemeContext);






const cartCount = cart.reduce(

(total,item)=>total + item.quantity,

0

);



const wishlistCount = wishlist.length;








return(


<nav className="navbar">





<div className="logo">

<Link to="/">

ShopKart

</Link>

</div>







<button

className="menu-btn"

onClick={()=>setMenuOpen(!menuOpen)}

>

☰

</button>









<ul className={menuOpen ? "nav-links active" : "nav-links"}>





<li>

<Link to="/" onClick={()=>setMenuOpen(false)}>

Home

</Link>

</li>







<li>

<Link to="/products" onClick={()=>setMenuOpen(false)}>

Products

</Link>

</li>







<li>

<Link to="/cart" onClick={()=>setMenuOpen(false)}>

Cart 🛒


{

cartCount > 0 &&

<span className="cart-count">

{cartCount}

</span>

}


</Link>

</li>








<li>

<Link to="/wishlist" onClick={()=>setMenuOpen(false)}>

Wishlist ❤️


{

wishlistCount > 0 &&

<span className="cart-count">

{wishlistCount}

</span>

}


</Link>

</li>








{

user ?



<>



<li>

<Link to="/profile" onClick={()=>setMenuOpen(false)}>

Profile 👤

</Link>

</li>







<li>

<Link to="/orders" onClick={()=>setMenuOpen(false)}>

My Orders

</Link>

</li>







<li>

<span className="welcome">

Welcome, {user.name}

</span>

</li>






<li>

<button

className="logout-btn"

onClick={()=>{

logout();

setMenuOpen(false);

}}

>

Logout

</button>

</li>



</>





:





<>



<li>

<Link to="/login" onClick={()=>setMenuOpen(false)}>

Login

</Link>

</li>







<li>

<Link to="/signup" onClick={()=>setMenuOpen(false)}>

Signup

</Link>

</li>



</>



}








<li>

<button

className="theme-btn"

onClick={toggleTheme}

>

{

darkMode ? "☀️ Light" : "🌙 Dark"

}

</button>

</li>







</ul>








</nav>


)


}


export default Navbar;