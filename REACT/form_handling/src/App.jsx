
import React from 'react'
import { useState } from 'react'

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submittedUser, setSubmittedUser] = useState(null)
/* handleChange → input ka data lena*/ 
  function handleChange(e) {
    const { name, value } = e.target

    if (name === "name") {
      setName(value)
    }

    if (name === "email") {
      setEmail(value)
    }

    if (name === "password") {
      setPassword(value)
    }
  }
/* formHandling → form submit karna */
  function formHandling(e) {
    
    e.preventDefault()

  //   console.log(name)
  //  console.log(email)
    //   console.log(password)
    
// const user = {
//   name: name,
//   email: email,
//   password: password
// }
    //     console.log(name);
    
  //   const user = {
  // name,
  // email,
  // password
  //   }
    //   console.log(user)
    
      const user = {
  name,
  email,
  password
      }
    localStorage.setItem("user", JSON.stringify(user));
    const users = JSON.parse(localStorage.getItem("user"));
    console.log(users);
    /*
    user → React ke andar bana hua object
localStorage.setItem() → browser mein save karta hai
localStorage.getItem() → browser se data nikalta hai
JSON.stringify() → object → string
JSON.parse() → string → object
    */ 
    console.log(user);
    
    setSubmittedUser(user)
    
    /* reset*/ 

  setName("")
  setEmail("")
  setPassword("")
  }

  return (
    <>
    <form onSubmit={formHandling}>
      <input
        // onChange={(e) => {
        //   setName(e.target.value);
          
          
          // }}
          onChange={handleChange}
          type="text" placeholder='enter the name' value={name}
          name='name'
          required
          minLength={3}
          maxLength={20}
        />

      <input
        // onChange={(e) => {
        //   setEmail(e.target.value);
          
          
          // }}
          onChange={handleChange}
          type="email" placeholder='enter the gmail' value={email}
          name='email'
          required
        
        />

      <input
      // onChange={(e) => {
      //     setPassword(e.target.value);
          
          
          //   }}
          onChange={handleChange}
          type="password" placeholder='enter the password' value={password}
          name="password"
          required
          minLength={6}
        />
      
      <button type='submit'>submit</button>

      <button
        type="button"
        onClick={() => {
          setName("")
          setEmail("")
          setPassword("")
          setSubmittedUser(null)
        }}
      >
        Reset
      </button>

    </form>

    {submittedUser && (
      <div>
        <h2>{submittedUser.name}</h2>
        <p>{submittedUser.email}</p>
        <p>{submittedUser.password}</p>
      </div>
    )}
   </>
  )
}

