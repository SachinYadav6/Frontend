import { useContext } from "react";
import { Link } from "react-router-dom";

import { WishlistContext } from "../Context/WishlistContext";

import "../css/Wishlist.css";


function Wishlist(){


const {

wishlist,

removeFromWishlist

}=useContext(WishlistContext);





return(


<div className="wishlist-page">



<h1>

My Wishlist ❤️

</h1>





{

wishlist.length === 0 ?



<div className="empty-wishlist">


<h2>

Wishlist Empty

</h2>


<p>

Add your favourite products here.

</p>


<Link to="/products">


<button>

Explore Products

</button>


</Link>


</div>





:





<div className="wishlist-container">



{

wishlist.map((product)=>(


<div

className="wishlist-card"

key={product.id}

>




<img

src={product.image}

alt={product.title}

/>





<h3>

{product.title}

</h3>





<p className="price">

₹ {product.price}

</p>





<button

className="remove-wishlist"

onClick={()=>removeFromWishlist(product.id)}

>

Remove ❤️

</button>





<Link to={`/product/${product.id}`}>


<button className="view-btn">

View Product

</button>


</Link>





</div>


))


}



</div>



}



</div>


)


}


export default Wishlist;