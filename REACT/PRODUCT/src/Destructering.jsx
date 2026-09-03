import React from 'react'

export default function Destructering({description, fullName,p}) {
  return (
      <div>
          <h1>destruction concept demo</h1>
          <h1>{fullName}</h1>
          <p>{description}</p>
          <p>{ p}</p>
    </div>
  )
}
