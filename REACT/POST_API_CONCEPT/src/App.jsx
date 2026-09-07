import React, { useEffect, useState } from 'react'

export default function App() {
    const [data, setdata] = useState();
    let user = {
        name: 'sachin kumar',
        age: 25,
        skills: ["html", 'css', 'javascript', 'java', 'react', "dsa"]
    }
   useEffect(() => {
  async function addUser() {
    try {
      const res = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      const data = await res.json();
        console.log(data);
        setdata(data)
        
    } catch (error) {
      console.log(error);
    }
  }

  addUser();
}, []);
    
  return (
    <div>
    <h1>{data?.id}</h1>
    </div>
  )
}
