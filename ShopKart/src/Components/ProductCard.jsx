import { Link } from "react-router-dom";
import { useContext } from "react";

import { WishlistContext } from "../Context/WishlistContext";

import "../css/ProductCard.css";


function ProductCard({product}){


const {

addToWishlist,

wishlist

}=useContext(WishlistContext);





const isWishlisted = wishlist.some(

(item)=>item.id === product.id

);





return(


<div className="product-card">





<div className="image-box">



<img

src={product.image}

alt={product.title}

/>




<button

className={`wishlist-btn ${isWishlisted ? "active" : ""}`}

onClick={()=>addToWishlist(product)}

>

❤️

</button>



</div>







<div className="product-info">





<h3>

{product.title}

</h3>







<p className="category">

{product.category}

</p>







<div className="rating">

⭐⭐⭐⭐⭐

</div>







<p className="price">

₹ {product.price}

</p>








<Link to={`/product/${product.id}`}>


<button className="details-btn">

View Details

</button>


</Link>






</div>





</div>


)


}


export default ProductCard;