import React from 'react'

export default function Card(props) {
  
  return (
    <div>
          <div className="card">
              <img
                  src={ props.img}
  alt="cat"
/>
              <div className="item">
                  <h1>{ props.header}</h1>
                  <p>{ props.p}</p>
              <button>profile view</button>
              </div>
      </div>
    </div>
  )
}
