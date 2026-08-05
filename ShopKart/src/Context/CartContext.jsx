import { createContext, useState, useEffect } from "react";


export const CartContext = createContext();



function CartProvider({children}){


const [cart,setCart] = useState(()=>{


const savedCart = localStorage.getItem("cart");


return savedCart ? JSON.parse(savedCart) : [];


});





/* Save Cart To LocalStorage */

useEffect(()=>{


localStorage.setItem(

"cart",

JSON.stringify(cart)

);


},[cart]);






/* Add Product */

const addToCart = (product)=>{


const existProduct = cart.find(

(item)=>item.id === product.id

);



if(existProduct){


setCart(

cart.map((item)=>

item.id === product.id

?

{

...item,

quantity:item.quantity + 1

}

:

item

)

);


}

else{


setCart([

...cart,

{

...product,

quantity:1

}

]);


}


};







/* Remove Product */

const removeFromCart = (id)=>{


setCart(

cart.filter(

(item)=>item.id !== id

)

);


};







/* Increase Quantity */

const increaseQty = (id)=>{


setCart(

cart.map((item)=>

item.id === id

?

{

...item,

quantity:item.quantity + 1

}

:

item

)

);


};







/* Decrease Quantity */

const decreaseQty = (id)=>{


setCart(

cart.map((item)=>

item.id === id && item.quantity > 1

?

{

...item,

quantity:item.quantity - 1

}

:

item

)

);


};







/* Clear Cart */

const clearCart = ()=>{


setCart([]);


};







/* Total Price */

const totalPrice = cart.reduce(

(total,item)=>

total + item.price * item.quantity,

0

);







return(


<CartContext.Provider

value={{

cart,

addToCart,

removeFromCart,

increaseQty,

decreaseQty,

clearCart,

totalPrice

}}

>


{children}


</CartContext.Provider>


)


}


export default CartProvider;