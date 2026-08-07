import React from 'react'
import UserContext from './Create'
import Profile from './Profile'

export default function App() {
  let obj = {
    name: 'sachin kumar',
    gmail: 'sachin@gmail.com',
    chaptgpt:"thanks bhaiya"
    
  }
  return (
    <UserContext.Provider value={obj}>
      <Profile/>
    </UserContext.Provider>
  )
}
