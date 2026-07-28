
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: 'sachin kumar',
    fatherName: 'basudev Yadav',
    id: 101,
    state:'Jharkhand'
  })
  function setUserValue() {
    const newUser = { ...user }
    newUser.id=102
    console.log(newUser);
    newUser.id = 102
    setUser(newUser)
    
  }
  return (
    <div>
      <div className="container">
        <h1>object:{ user.id}</h1>
        <button
          onClick={setUserValue}
        >changevalue</button>
      </div>
    </div>
  )
}
export default App;