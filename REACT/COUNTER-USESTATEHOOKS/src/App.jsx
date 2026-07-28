import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  function numAdd() {

    setNum(num + 1);
    
    
  }
  function numRemove() {

    if (num > 0) {
    setNum(num - 1);
   
    }
    
  }

  return (
    <div>
      <div className="container">
        <h1>counter:{ num}</h1>
        <button
          onClick={numAdd}
        >add</button>
        <button
          onClick={
            numRemove
          }
        >remove</button></div>
    </div>
  )
}
export default App;