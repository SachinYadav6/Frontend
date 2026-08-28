import React from 'react'
export default function Card(props) {
    return (
        <div className="card">
            <img src={props.src} alt="product img " />
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <p>{props.rating}</p>
            <p>{props.stock}</p>
            <p>{props.brand}</p>
        
        </div>)
}