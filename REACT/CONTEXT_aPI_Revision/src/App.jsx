import React from 'react'
import UserContext from './create'
import Profile from './Profile'

export default function App() {
  return (
   <UserContext.Provider value="Sachin Kumar">
      
       <Profile/>
      </UserContext.Provider>
  
  )
}
