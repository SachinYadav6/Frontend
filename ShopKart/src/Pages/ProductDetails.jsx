import { useParams } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";

import products from "../data/products";

import "../css/ProductDetails.css";


function ProductDetails(){


const { id } = useParams();


const { addToCart } = useContext(CartContext);


const { addToWishlist, wishlist } = useContext(WishlistContext);





const product = products.find(

(item)=>item.id === Number(id)

);





if(!product){

return(

<h2>

Product Not Found

</h2>

)

}





const isWishlisted = wishlist.some(

(item)=>item.id === product.id

);






return(


<div className="product-details">





<div className="image-section">


<img

src={product.image}

alt={product.title}

/>


</div>








<div className="details">



<p className="category">

{product.category}

</p>





<h1>

{product.title}

</h1>





<div className="rating">

⭐⭐⭐⭐⭐

</div>






<h2>

₹ {product.price}

</h2>






<p>

{product.description}

</p>







<div className="action-buttons">



<button

className="cart-btn"

onClick={()=>addToCart(product)}

>

🛒 Add To Cart

</button>







<button

className="wish-btn"

onClick={()=>addToWishlist(product)}

>

{

isWishlisted ?

"❤️ Added"

:

"🤍 Wishlist"

}


</button>



</div>





</div>





</div>


)


}



export default ProductDetails;