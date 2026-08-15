import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const { cart } = useSelector((state) => state.products)

  const totalItems = cart.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link className="logo" to="/home">
          ShopKart
        </Link>

        <div className="nav-links">
          <Link to="/home">Home</Link>

          <Link to="/products">Products</Link>

          <Link to="/cart">
            Cart ({totalItems})
          </Link>

          <Link to="/login">Login</Link>
        </div>

      </div>
    </nav>
  )
}