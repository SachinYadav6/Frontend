import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart
} from '../redux/slices/productSlice'
import { Link } from 'react-router-dom'

export default function Cart() {
  const cart = useSelector((state) => state.products.cart)
  const dispatch = useDispatch()

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart is Empty</h1>
        <p>No products added yet.</p>

        <Link to="/products">
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h1>Product Cart</h1>

      <h2>Total Items: {cart.length}</h2>

      <div className="cart-container">
        {cart.map((item) => {
          return (
            <div className="cart-item" key={item.id}>

              <img
                src={item.thumbnail}
                alt={item.title}
              />

              <div className="cart-info">
                <h2>{item.title}</h2>

                <p>{item.description}</p>

                <h3>₹{item.price}</h3>

                <h3>Quantity: {item.quantity}</h3>

                <div className="quantity-buttons">
                  <button
                    onClick={() => {
                      dispatch(incrementQuantity(item.id))
                    }}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => {
                      dispatch(decrementQuantity(item.id))
                    }}
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => {
                    dispatch(removeFromCart(item.id))
                  }}
                >
                  Remove
                </button>
              </div>

            </div>
          )
        })}
      </div>

      <div className="cart-total">
        <h2>Total Price: ₹{totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  )
}