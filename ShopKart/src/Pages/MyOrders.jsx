import { useState } from "react";

import "../css/MyOrders.css";


function MyOrders(){


const [orders] = useState(()=>{


const savedOrders = localStorage.getItem("orders");


return savedOrders 
? 
JSON.parse(savedOrders) 
: 
[];


});





return(


<div className="orders">


<h1>

My Orders

</h1>





{

orders.length === 0 ?



<div className="no-orders">

<h2>

No Orders Found

</h2>

<p>

You have not placed any order yet.

</p>

</div>





:





orders.map((order)=>(


<div className="order-card" key={order.id}>



<div className="order-header">


<h3>

Order ID: #{order.id}

</h3>


<p>

📅 {order.date}

</p>


</div>






<div className="order-total">


Total Amount : ₹ {order.total}

</div>







<div className="products">


<h3>

Products

</h3>



{

order.items.map((item)=>(


<div className="order-product" key={item.id}>


<img

src={item.image}

alt={item.title}

/>



<div>


<h4>

{item.title}

</h4>


<p>

Quantity : {item.quantity}

</p>


<p>

₹ {item.price}

</p>


</div>



</div>


))


}


</div>









<div className="customer">


<h3>

🚚 Delivery Details

</h3>


<p>

Name : {order.customer.name}

</p>


<p>

Phone : {order.customer.phone}

</p>


<p>

Address : {order.customer.address}

</p>


<p>

City : {order.customer.city}

</p>


<p>

Pincode : {order.customer.pincode}

</p>


</div>





</div>


))


}



</div>


)


}


export default MyOrders;