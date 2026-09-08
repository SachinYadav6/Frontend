import React, { useState } from 'react'

export default function App() {
  const [name,setname] = useState("");
  const [age,setage] = useState("");
 async  function handlingform(e) {
   e.preventDefault();
   const user= {
     name,
     age: Number(age)

   };
   const res = await fetch("https://dummyjson.com/users/1", {
     method: "PATCH",
     headers: {
       "Content-Type": "application/json"
     }, body: JSON.stringify(user)
   });
   const data = await res.json();
   console.log(data);
   

  }
  return (
    <>
      <h1>form handling.</h1>
      <form onSubmit={handlingform}>
        <input
          onChange={(e) => {
            setname(e.target.value);
          }}
          type="text" placeholder="enter name" value={name} />
        <input
           onChange={(e) => {
            setage(e.target.value);
          }}
          type="text" placeholder='enter age ' value={age} />
        <button type='submit'>submit</button>
     </form>
    </>
  )
}
