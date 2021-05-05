import React, { useEffect, useState } from "react";
import './App.css';
import Todo from "./components/Todo";
import Button from '@material-ui/core/Button';
import { FormControl, Input, InputLabel, TextField } from "@material-ui/core";
import {db} from "./firebase";
import firebase from "firebase";

function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState("");
  const [description,setDescription] = useState("");

  useEffect(() =>{
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id:doc.id,todo:doc.data().todo,description:doc.data().description,status:doc.data().status})))
    })
  },[]);

  const handleAddTodo = (e) => {
    e.preventDefault();

    db.collection('todos').add({
      todo:input,
      description:description,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      status:false
    })
    console.log(input);
    setInput("");
    setDescription("");
  }

  return (
    <div className="App">
      <h1>Todo Application</h1>
      <form>
        <FormControl>
          <InputLabel>Write your todo</InputLabel>
            <Input value={input} onChange={(e) => setInput(e.target.value)} margin="dense"/>
            <TextField
                id="outlined-multiline-static"
                label="Describe your task here"
                multiline
                rows={4}
                variant="outlined"
                value={description} onChange={(e) => setDescription(e.target.value)}
              />
        </FormControl>
        <Button disabled={!input} variant="contained" color="primary" onClick={handleAddTodo}>
          Add Todo
        </Button>
      </form>
      {todos && todos.map((todo) => {
        return (<Todo key={todo.id} task={todo} />)
      })}
    </div>
  );
}

export default App;
