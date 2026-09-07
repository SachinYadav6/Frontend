import React, { useState } from 'react'

export default function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function formhanlding(e) {
    e.preventDefault();


    const user = {
      name,
      email, 
      password
    };

    // Pehle purane users get karo
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Naya user add karo
    users.push(user);

    // Updated users localStorage mein save karo
    localStorage.setItem("users", JSON.stringify(users));

    console.log(users);

    // Form clear
    setname("");
    setemail("");
    setpassword("");
  }

  return (
    <>
      <h1 className='text-primary bg-info border border-grey mt-4 m-3 p-4 rounded'>
        React form handling through object
      </h1>

      <form
        onSubmit={formhanlding}
        className='rounded m-4 p-5 text-muted d-flex flex-column align-items-center gap-3 h-25 w-50 bg-primary'
      >

        <input
          onChange={(e) => setname(e.target.value)}
          className='form-control'
          type="text"
          placeholder='Enter the name'
          value={name}
        />

        <input
          onChange={(e) => setemail(e.target.value)}
          className='form-control'
          type="email"
          placeholder='Enter the email'
          value={email}
        />

        <input
          onChange={(e) => setpassword(e.target.value)}
          className='form-control'
          type="password"
          placeholder='Enter password'
          value={password}
        />

        <button
          type='submit'
          className='border rounded px-2 mx-4 fw-semibold bg-primary text-white fs-2'
        >
          Submit
        </button>

      </form>
    </>
  )
}