import { useState } from "react";

function App() {
  const [array, setArrayValue] = useState([10,20,30,40]);

  function setValue() {
    const newArray = [...array];
    console.log(newArray);
     newArray.splice(3,1,56)
    setArrayValue(newArray)

    
  }
  

  return (
    <div>
      <div className="container">
        <h1>array:{array}</h1>
        <button
          onClick={setValue}
        >changeValue</button>
        </div>
    </div>
  )
}
export default App;
