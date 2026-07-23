import { useState } from "react";

function App() {
  const [array, setArray] =useState([10,20,30,40,50]);
  function setelement() {
    const newArray = [...array]
    newArray[2] = 90;
    // newArray.splice(2,1,300);
    setArray(newArray)
    }
  

  return (
    <div>
      <h1>{array.join(' ')}</h1>
      <button
        onClick={setelement}
       
      >click me!</button>
     
    </div>
  )
}
export default App;