import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';   // Bootstrap import

export default function App() {
    const [updates,setupdate] = useState("");
    const [input, setinput] = useState("");
    const [todo, settodo] = useState([]);

    function add() {
        if (input.trim() === "") {
            return;
        } else {
            settodo([...todo, input]);
            setinput("");
        }
    }

    function create() {
        console.log("create item");
    }

    function update(index,newvalue) {
        const newtodo = todo.map((item, i) => {
            if (i === index) {
                return newvalue;
            } else {
                return item;
            }
        })
        settodo(newtodo);
        setupdate("");
    }

    function deleted(index) {
        const newTodos = todo.filter((item,i) => i !== index);
        settodo(newTodos);
    }

    return (
        <div className="container mt-4">
            <h1 className="text-center text-primary mb-4">TODO APP</h1>

            {/* Add Task Input */}
            <input 
                type="text" 
                className="form-control mb-2"
                placeholder="todo app" 
                value={input}
                onChange={(e) => setinput(e.target.value)} 
            />

            {/* Update Task Input */}
            <input 
                type="text" 
                className="form-control mb-3"
                placeholder="update value" 
                value={updates}
                onChange={(e) => setupdate(e.target.value)} 
            />

            {/* Buttons */}
            <button className="btn btn-success me-2" onClick={add}>Add</button>
            <button className="btn btn-secondary me-2" onClick={create}>Create</button>

            <h2 className="mt-4">Tasks</h2>
            <ul className="list-group">
                {todo.map((item,index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {item}
                        <div>
                            <button className="btn btn-danger btn-sm me-2" onClick={() => deleted(index)}>Delete</button>
                            <button className="btn btn-warning btn-sm" onClick={() => update(index, updates)}>Update</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
