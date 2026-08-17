import React from 'react'

export default function Card(props) {
    return (
      <div className='card'>
            <img src={ props.img} alt="img" />
            
            <h1>{ props.title}</h1>
            <p>{ props.p}</p>
            <h3>{ props.category}</h3>
            <h3>{ props.price}</h3>
            <h3>{ props.rating}</h3>
            <h3>{ props.brand}</h3>

            </div>
  )
}
