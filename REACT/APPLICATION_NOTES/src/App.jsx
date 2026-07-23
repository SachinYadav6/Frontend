import { useState } from "react";


function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);
 
  
  function sumithandler(e) {
    e.preventDefault();
    console.log('form submitted');
   
      const copyTask = [...task];
  copyTask.push({ title, details });
    console.log(copyTask);
    setTask(copyTask)
     setTitle("");
    setDetails("");
  }
  /* card delete*/ 
  function deleteHandler(idx) {
    const copyTask = [...task];
    copyTask.splice(idx,1);
    setTask(copyTask)
    
  }

  return (
    <div>
    
      <form className="form"
        onSubmit={(e) => {
          sumithandler(e)
        }}
      >
        <input type="text" value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          
          placeholder="enter notes heading" />
        <textarea value={details}
          onChange={(e) => {
            console.log(e.target.value);
            setDetails(e.target.value)
            
          }}
         className="textera"></textarea>
        <button>Addnotes</button>
      </form>
      {/* task add */}
      <div className="container">
        
        {
          task.map(function (elem, idx) {
            return <div 
              
              className="item" key={idx}>
              <button className="btndelete"
                onClick={() => deleteHandler(idx)}
              >x</button>
              <h3>{elem.title}</h3>
              <p>{ elem.details}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}
export default App;
