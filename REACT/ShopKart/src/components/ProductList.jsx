import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

export default function ProductList() {
  const { products } = useSelector((state) => state.products)

  return (
    <div className="product-list">
      {products.map((elem) => {
        return (
          <ProductCard
            key={elem.id}
            id={elem.id}
            img={elem.thumbnail}
            heading={elem.title}
            description={elem.description}
            price={elem.price}
            brand={elem.brand}
            category={elem.category}
          />
        )
      })}
    </div>
  )
}