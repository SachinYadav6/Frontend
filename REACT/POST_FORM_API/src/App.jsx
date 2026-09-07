import { useState } from 'react'
export default function App() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
async function formhandling(e) {
  e.preventDefault();

  const user = {
    name,
   age: Number(age)
  };

  const res = await fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });

  const data = await res.json();
  console.log(data);
}
  return (
    <>
      <form
        onSubmit={formhandling}
      >
        <input
          onChange={(e) => {
            setname(e.target.value);
            
          }}
          type="text" value={name} placeholder='enter name' />
        <input
          onChange={(e) => {
            setage(e.target.value);
          }}
          type="number" placeholder='enter age' value={age} />
        <button type='submit'>submit</button>
      </form>
    </>
  )
}
