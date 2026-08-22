import React, { useState } from 'react'

export default function Card() {
    const [cart,setcart] = useState([]);
    function addtocart() {
       
        const cartdetail = {
            name: "mango",
           price: 250,
          img: "https://images.unsplash.com/photo-1685429631345-3de21cc2eb65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbmdvfGVufDB8fDB8fHww",
            heading: "Mango",
            description: "mango is the sweetest fruit . it is people called to friut of king",
          quantity: 1
        }
        //  const newcart = [...cart];
        // const cartpush = newcart.push(cartdetail);
        // console.log(newcart);
        // console.log(cartpush);
        // setcart(newcart);
    /* add quantity*/ 
    /*
    Add to Cart
    ↓
cart.find()
    ↓
Mango mila?
   ↙       ↘
 YES       NO
  ↓         ↓
map()     new array
  ↓         ↓
...item   push()
  ↓         ↓
quantity  setcart()
+1
  ↓
setcart()
    */ 
    const existingitem = cart.find((item) => item.name === "mango");


   if (existingitem) {
    const updatedCart = cart.map((item) => {
        if (item.name === "mango") {
            return {
                ...item,
                quantity: item.quantity + 1
            };
        }

        return item;
    });

    setcart(updatedCart);
} else {
    const newcart = [...cart];
    newcart.push(cartdetail);
    setcart(newcart);
}

    }
    return (
        <>
            <h3>cart:{cart.length}</h3>
            {
                cart.map((item,index) => (
                   
                        <div className='card' key={index}>
                             <img src={item.img} alt="catimg" />
                            <h1>{item.heading}</h1>
                            <p>{ item.description}</p>
                        <p>{item.price}</p>
                        <p>{item.quantity}</p>
                            
                        
                        </div>
                     
                ))
            }
      <div className='card'>
          <img src="https://images.unsplash.com/photo-1685429631345-3de21cc2eb65?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbmdvfGVufDB8fDB8fHww" alt="mango img" />
          <h1>mango</h1>
          <p>mango is the sweetest fruit . it is people called to friut of king</p>
          <p>250</p>
          <button
              onClick={addtocart}
          >Add to cart</button>
      
            </div>
            </>
  )
}
