import React, { useContext } from 'react'
import UserContext from './Create'

export default function Profile() {
    let value=useContext(UserContext)
  return (
    <div>
         <h1>Gmail: {value.gmail}</h1>
          <h2>Name: {value.name}</h2>
          <h3>chatgpt:{ value.chaptgpt}</h3>
    </div>
  )
}
