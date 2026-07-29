import { useState } from "react";

function App() {
    const [name, setName] = useState('sachin kumar')
    function changeName() {
        setName('sonu kumar')
    }
    return (
        <div className="container">
            <h1>{ name}</h1>
            <button
                onClick={changeName}
            >click me!</button>
        </div>
    )
}
export default App;
