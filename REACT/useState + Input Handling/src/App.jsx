import React, { useState } from 'react'

export default function App() {
  const [value, setValue] = useState("");
 
  

  return (
    <div className='container'>
      <h1>sachin:{value}</h1>
      <h1>length:{value.length}</h1>
      <input
        onChange={(e) => {
          setValue(e.target.value);
          
        }} type="text" placeholder='enter the value' value={value}
      
        
      />
      <button
        onClick={() => {
          setValue("")
         
      }}>reset</button>
    </div>
  )
}
