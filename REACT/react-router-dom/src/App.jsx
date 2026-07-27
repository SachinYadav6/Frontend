import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
 
function App() {
    
  
  return (
    <div>
      <div className="nav">
        <h3>logo</h3>
      <div>
        <a href="/">home</a>
        <a href="/about">about</a>
        <a href="/contact">contact</a>
      </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />


      </Routes>
      
    </div>
  )
}
export default App;
