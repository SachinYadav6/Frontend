import React from 'react'
import UserContext from './Create'
import Profile from './Profile'

export default function App() {
  const user = {
    name: 'sachin kumar',
    gmail: 'sachin@gamil.com',
    userdata: function () {
      return {
        username: this.name,
      userGmail:this.gmail,
     }
      
    }
}
  return (
    <UserContext.Provider value={user}>
      <Profile/>
   </UserContext.Provider>
  )
}
