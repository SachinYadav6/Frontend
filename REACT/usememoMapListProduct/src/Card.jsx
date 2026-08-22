import React from 'react'

export default function Card(props) {
  return (
      <div className='card'>
          
          <img src={props.img_url} alt="apple img" />
          <h1>{ props.heading}</h1>
          <p>{props.description}</p>
          <p>{ props.price}</p>
          <button>profile view</button>
    </div>
  )
}
