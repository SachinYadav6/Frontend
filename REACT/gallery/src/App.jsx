import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Product from './Product'
import Cart from './cart'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}