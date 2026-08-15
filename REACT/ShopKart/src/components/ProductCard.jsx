import React from 'react'
import{Link} from "react-router-dom"
export default function ProductCard(props) {
  return (
    <div className="card">
      
      <Link to={`/products/${props.id}`}>
        <h3>{props.id}</h3>
          <img src={props.img} alt="" />
          <h1>{ props.heading}</h1>
          <p>{ props.description}</p>
          <h3>{ props.price}</h3>
          <h2>{ props.brand}</h2>
      <h4>{props.category}</h4>
      </Link>
    </div>
  )
}
