import React, { useContext } from 'react'
import UserContext from './create'

export default function Profile() {
  const value=  useContext(UserContext)
  return (
    <div>
          <button
              onClick={value}
          >call value</button>
    </div>
  )
}
