import React, { } from 'react'

export default function Card(props) {
  

  return (
      <div className="card">
          <img src={props.thumbnail} alt="thumbnail img url" />
          <h1>{ props.title}</h1>
          <p>{props.description}</p>
          <p>{ props.category}</p>
          <p>{props.brand}</p>
          <p>{props.price}</p>
          <p>{ props.stock}</p>
      <button
        onClick={() => {
          props.addtocart(props)
        }}
      >add to card</button>
      

    </div>
  )
}
