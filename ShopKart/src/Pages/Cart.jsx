import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../Context/CartContext";
import "../css/Cart.css";


function Cart(){


const {

cart,

removeFromCart,

increaseQty,

decreaseQty

}=useContext(CartContext);




const totalPrice = cart.reduce(

(total,item)=>

total + item.price * item.quantity,

0

);





return(


<div className="cart">


<h1>
My Cart
</h1>





{

cart.length === 0 ?


<h2>
Cart is Empty
</h2>




:


<>


{

cart.map((item)=>(


<div

className="cart-item"

key={item.id}

>


<img

src={item.image}

alt={item.title}

/>





<div className="cart-details">


<h3>
{item.title}
</h3>




<p>
₹ {item.price}
</p>





<div className="quantity">


<button

onClick={()=>decreaseQty(item.id)}

>
-
</button>





<span>
{item.quantity}
</span>





<button

onClick={()=>increaseQty(item.id)}

>
+
</button>



</div>






<button

className="remove"

onClick={()=>removeFromCart(item.id)}

>

Remove

</button>




</div>


</div>


))

}






<h2 className="total">

Total : ₹ {totalPrice}

</h2>






<Link to="/checkout">


<button className="checkout-btn">

Proceed To Checkout

</button>


</Link>





</>


}



</div>


)

}


export default Cart;