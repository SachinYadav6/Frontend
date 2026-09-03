import React, { useState } from 'react'

export default function Card({ skills, user, product, categories, printimageFtn, passobject,girl }) {
    const callFtn = printimageFtn();
    const passobjects = passobject();
    const [girname, setgilname] = useState();
  return (
      <div>
          <img src={passobjects[1]} alt="img profile" height={200} />
          <h1>{ passobjects[0]}</h1>
          <h1>{user.name}</h1>
          <h3>language:{skills[0]}</h3>
          <p>{categories[1]}</p>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          <img src={callFtn.img_url} alt="img" height={300} />
          <h3>girlNmaeprint is : {girname}</h3>
          <button
              onClick={() => {
                  const value = girl();
                  setgilname(value)

              }}
          
          >click me</button>
         
                     

 

    </div>
  )
}
