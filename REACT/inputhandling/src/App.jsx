import { useState } from "react";

function App() {
  const [title, setTitle] = useState(' ');
  function submitHandler(e) {
    e.preventDefault();
    console.log('form is sumitted by :', title);
    setTitle(' ')
    
    
  }

  return (
    <div>
      <form
        onSubmit={
          (e) => {
            submitHandler(e)
          }
        }
        
      >
        <input type="text" placeholder="enter the name" value={title}
          onChange={
            (e) => {
              setTitle(e.target.value)
            }
          }
          />
        <button>submit</button>
      </form>
    </div>
  )
}
export default App;

