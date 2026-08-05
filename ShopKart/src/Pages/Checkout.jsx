import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

import "../css/Checkout.css";


function Checkout(){


const {

cart,

clearCart,

totalPrice

}=useContext(CartContext);



const navigate = useNavigate();



const [customer,setCustomer] = useState({

name:"",

phone:"",

address:"",

city:"",

pincode:""

});





const handleChange = (e)=>{


setCustomer({

...customer,

[e.target.name]:e.target.value

});


};






const handleSubmit = (e)=>{


e.preventDefault();




const order = {


id:Date.now(),


date:new Date().toLocaleDateString(),


items:cart,


total:totalPrice,


customer


};





const oldOrders = JSON.parse(

localStorage.getItem("orders")

) || [];





localStorage.setItem(

"orders",

JSON.stringify([

...oldOrders,

order

])

);





clearCart();





navigate("/order-success");


};







return(


<div className="checkout">



<h1>

Checkout

</h1>





<div className="checkout-box">



<h2>

Total Amount : ₹ {totalPrice}

</h2>





<form onSubmit={handleSubmit}>


<input

type="text"

name="name"

placeholder="Enter Name"

value={customer.name}

onChange={handleChange}

required

/>






<input

type="text"

name="phone"

placeholder="Enter Phone"

value={customer.phone}

onChange={handleChange}

required

/>







<input

type="text"

name="address"

placeholder="Enter Address"

value={customer.address}

onChange={handleChange}

required

/>








<input

type="text"

name="city"

placeholder="Enter City"

value={customer.city}

onChange={handleChange}

required

/>







<input

type="number"

name="pincode"

placeholder="Enter Pincode"

value={customer.pincode}

onChange={handleChange}

required

/>







<button type="submit">

Place Order

</button>




</form>



</div>



</div>


)


}


export default Checkout;