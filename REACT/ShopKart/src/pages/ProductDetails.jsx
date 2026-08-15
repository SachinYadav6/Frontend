import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/productSlice'

export default function Productdetails() {
  const { id } = useParams()
  const { products } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const product = products.find((product) => {
    return product.id === Number(id)
  })

  if (!product) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="product-details">
      <div className="product-details-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="product-details-info">
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h3>₹{product.price}</h3>

        <h2>{product.brand}</h2>

        <h4>{product.category}</h4>

        <button
          onClick={() => {
            console.log('CLICK:', product)
            dispatch(addToCart(product))
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}