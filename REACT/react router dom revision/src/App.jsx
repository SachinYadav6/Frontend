import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <div>
      <div className="nav">
        <h1>logo</h1>
        <div>
          <a href="/home">home</a>
          <a href="/about">about</a>
          <a href="/contact">contact</a>
        </div>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
           <Route path="/contact" element={ <Contact/>} />
      </Routes>
    </div>
    
    
  )

}
export default App;
