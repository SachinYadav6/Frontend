import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="py-3 w-100 d-flex flex-row flex-wrap justify-content-around align-items-center gap-4 bg-primary text-white rounded-1">
      <Link className='text-white text-decoration-none fw-bold' to="/">Home</Link>
      <Link className='text-white text-decoration-none fw-bold'   to="/about">About</Link>
      <Link className='text-white text-decoration-none fw-bold'   to="/login">Login</Link>
      <Link className='text-white text-decoration-none fw-bold' to="/signin">Signin</Link>
      <Link className='text-white text-decoration-none fw-bold'   to="/product">Product</Link>
    
    </div>
    
  )
}
