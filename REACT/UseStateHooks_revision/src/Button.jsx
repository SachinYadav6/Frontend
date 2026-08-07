import "/Button.css";
import React from 'react'

export default function Button(props) {
  return (
    <div>
          <div className="btn">
           <button>{props.text}</button>
          
          </div>
    </div>
  )
}

