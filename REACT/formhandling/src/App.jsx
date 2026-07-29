import { useState } from "react";

function App() {

  const [name, setName] = useState("");


  function submitHandler(e) {
    e.preventDefault();
    console.log('form sumbitted', e);
    console.log("Send data to server:", name);
    setName("")
    

  }
 
  return (
    <div className="form">
      <form onSubmit={function (e) {
            submitHandler(e)
        }}>
        <input type="text" value={name}
          onChange={function (e) {
            setName(e.target.value);
          }} placeholder="enter the name" />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
export default App;