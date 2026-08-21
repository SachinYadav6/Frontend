import React from 'react'

export default function Card(props) {
  return (
      <div className="card">
          
          <img src={props.img_url} alt="men profile" />
          <h1>{ props.heading}</h1>
          <p>{ props.description}</p>
          <button>profile view</button>
   </div>
  )
}
