import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  const addvalue = () => {
    console.log('click', counter);
    
    setCounter(counter+1)
    
  }

  const removevalue = () => {
    setCounter(counter - 1);
    
  }


  return (
    
    <>
      <h1>chai with code || learning react </h1>
      <h2>conter value : {counter}</h2>
      <button
        onClick={addvalue}
      >add value{ counter}</button>
      <br />
      <button onClick={removevalue}
      >remove value{ counter}</button>
      <footer>footer{ counter}</footer>
    </>
  )
}

export default App




