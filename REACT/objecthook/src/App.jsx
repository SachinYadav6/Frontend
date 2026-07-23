import { useState } from "react";

function App() {
  const [user, setUserNum] = useState({ name: 'sonu', section: 'a', fatherName: 'basudev yadav' });
  function userName() {
    const newUser = { ...user };
    newUser.section = 'B';
    setUserNum(newUser)
  }

  return (
    <div>
      <h1>{user.section}</h1>
      <button
        onClick={userName}
      >click me!</button>
     
    </div>
  )
}
export default App;