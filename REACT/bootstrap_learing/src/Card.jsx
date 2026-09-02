import React from 'react'

export default function Card(props) {
  return (
      <div className="w-25 flex-shrink-0   d-flex flex-column overflow-hidden  align-items-center gap-1  bg-white border rounded-3 shadow-sm">
          <img className="w-100 " src={ props.url} alt="product  img" />
          <h1 className="text-success text-center fw-semibold ">{ props.heading}</h1>
          <p className='text-secondary text-center fs-6 '>{ props.description}</p>
          <p className='fs-6 text-info'>{ props.price}</p>
          <button className="mb-2 ps-3 pe-3 border rounded text-light bg-primary fw-bold pt-1 pb-1">AddToCard</button>
          
    </div>
  )
}
