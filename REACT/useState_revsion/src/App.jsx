import React, { useState } from 'react'
export default function App() {
  const [count,setCount] = useState(0);
  return (
    <div className='container'>
      <h1>count:{ count}</h1>
      <button
        onClick={() => {
          setCount(prev=>prev+1);
          
       }}
      >increase</button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(prev=>prev-1)
          }
        }}
      >decrease</button>
      <button
        onClick={() => {
          setCount(0)
        }}
      >reset</button>
    </div>
  )
}
