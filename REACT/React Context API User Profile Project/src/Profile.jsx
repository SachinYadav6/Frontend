import React, { useContext, useState } from 'react'
import UserContext from './Create'
export default function Profile() {
    const value = useContext(UserContext);
    const [object, setobject] = useState({})
   
  return (
      <>
          <button
              onClick={() => {
                  setobject(value.userdata())
              }}
          >click</button>
          
          <h1>{object.username}</h1>
          <h2>{object.userGmail}</h2>

    

      
</>
   
  )
}
