import { Link } from "react-router-dom";

import "../css/OrderSuccess.css";


function OrderSuccess(){


return(


<div className="order-success">


<div className="success-card">



<div className="success-icon">

✓

</div>




<h1>

Order Placed Successfully

</h1>




<p>

🎉 Thank you for shopping with ShopKart.

</p>



<p className="message">

Your order has been confirmed.  
We will deliver your product soon.

</p>





<Link to="/products">


<button>

Continue Shopping

</button>


</Link>



</div>


</div>


)


}


export default OrderSuccess;