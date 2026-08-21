import React from 'react'
import { useState } from 'react'

export default function App() {
  const [isLogin, setLogin] = useState(false)

  return (
    <div>
      {isLogin ? <h1>Welcome</h1> : <h1>Please Login</h1>}

      {isLogin ? (
        <button onClick={() => setLogin(false)}>
          Logout
        </button>
      ) : (
        <button onClick={() => setLogin(true)}>
          Login
        </button>
      )}
    </div>
  )
}