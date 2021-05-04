import React, { useState } from "react";
import './App.css';

function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log(input)
    setTodos([...todos,input])
  }
  return (
    <div className="App">
      <h1>Todo Application</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={handleAddTodo}>Add Todo</button>
      {todos && todos.map((todo) => {
        return (<li>{todo}</li>)
      })}
    </div>
  );
}

export default App;
