import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/product";
import Men from "./pages/Men";
import Women from "./pages/Women";
function App() {
  return (
    <div>
      <div className="nav">
        
      <Link to='/home'>home</Link>
      <Link to='/about'>about</Link>
      <Link to='/contact'>contact</Link>
      <Link to='/product'>product</Link>
      
     </div>

     <Routes>
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />

      {/* Nested Product Routes */}
  <Route path="/product" element={<Product />}>
    <Route path="men" element={<Men />} />
    <Route path="women" element={<Women />} />
  </Route>

</Routes>
      
    </div>
      
    
  )
}
export default App;
