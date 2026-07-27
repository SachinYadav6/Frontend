import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Men from "./pages/Men";
import Women from "./pages/Women";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/men" element={<Men />} />
        <Route path="/product/women" element={<Women />} />

        <Route path="/contact" element={<Contact />} />
         
         <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;