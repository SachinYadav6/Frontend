import React from 'react'
import { useContext } from 'react'
import UserContext from './create';

export default function Profile() {
    const value = useContext(UserContext);
  return (
    <div>
          <h1>{ value}</h1>
    </div>
  )
}

