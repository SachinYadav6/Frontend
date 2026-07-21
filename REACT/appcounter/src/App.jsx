import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  function increaseNum() {
    setNum(num + 1);
  }
    function decreaseNum() {
    setNum(num - 1);
    }
    function jump5num() {
    setNum(num + 5);
  }
  return(
  <div>
      <h1>{ num}</h1>
      <button
        onClick={increaseNum}

      >increase</button>

      <button
        
         onClick={decreaseNum}
        
      >decrease</button>
      <button
         onClick={jump5num}
      >jump5num</button>
    </div>
  )
}
export default App;