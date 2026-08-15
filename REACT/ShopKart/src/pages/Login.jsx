import React from 'react'

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login</h1>

        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}