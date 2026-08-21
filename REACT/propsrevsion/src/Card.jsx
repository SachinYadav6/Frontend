import React from 'react'

export default function Card(props) {
  return (
    <div>
          <div className="card">
        <img src={props.img_url} alt="/men profile"/>
        <h1>{props.heading || "unkwown person"}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur ab tempore tempora.</p>
              <button>view profile</button>
      </div>
    </div>
  )
}
