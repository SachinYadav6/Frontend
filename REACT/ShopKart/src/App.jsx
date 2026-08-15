import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ProductThunkCreate } from './redux/slices/productSlice'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ProductThunkCreate())
  }, [dispatch])

  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}