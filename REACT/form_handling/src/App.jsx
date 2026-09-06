import React, { useState } from 'react'

export default function App() {
  const [name, setname] = useState("");
    const [email, setemail] = useState("");
  function formhandling(e) {
    e.preventDefault();
    /*thoda simple me ok mthod ----> 1*/
    /*

    const user = {
  name: name,
  email: email
    };
    const {name:username,email:useremail}=user;
    console.log(useremail,username);
 */
    
    /* method 2*/ 
   
    const user = { name, email };
    console.log(name,email);
    
  }
     
  return (
    <>
    
      <form
        onSubmit={formhandling}
        className='flow control bg-grey' >
       <input
        onChange={(e) => {
          setname(e.target.value)
        }}
        type="text" placeholder='enter the name' value={name} />
        <input
           onChange={(e) =>{
            setemail(e.target.value)
            
          }}
          type="email" placeholder='enter the email' value={email} />
        <button type='submit'>submit</button>

      </form>
    </>
  )
}
