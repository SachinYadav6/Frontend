import React, { useState } from 'react'
import products from "./data/productData"
import ProductCard from './ProductCard'
import Cart from './Cart';

export default function Product() {
    const [card, setcard] = useState([]);
    console.log(card);
    
    
    
  // addtocard
    function addtocart(product) {
        console.log(product);
        setcard([...card,product])
        
  
    }
    return (
      <>
    <div className="container my-4 bg-light">
      <div className="row g-3">
        {products.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <ProductCard
              img_url={item.img}
              title={item.title}
              price={item.price}
              category={item.category}
                    description={item.description}
                    addtocart={addtocart}
            />
          </div>
        ))}
      </div>
            </div>
            {/* cart render  */}
            <Cart card={ card} />
      </>
  )
}
