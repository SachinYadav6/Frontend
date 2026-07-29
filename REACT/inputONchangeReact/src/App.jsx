import { useState } from "react";

function App() {

    const [title, setTitle] = useState("");

    const [detail, setDetail] = useState("");

    function settitle(e) {
        console.log(e.target.value);
        
        setTitle(e.target.value)
        
    }
    /* details*/ 
 function setdetails(e) {
        console.log(e.target.value);
        
        setDetail(e.target.value)
        
    }

    return (
        <div className="container">
            <input type="text" value={title}
                placeholder="heading title"
                onChange={settitle}
            />
            <textarea placeholder="details"
                onChange={setdetails}
                value={detail}
            ></textarea>
            
            <h2>heading:{title}</h2>
            <h1>decripation:{ detail}</h1>
        </div>
    )
}
export default App;
