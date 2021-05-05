import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input, List, ListItem, ListItemText, Modal, TextField, Typography } from '@material-ui/core';
import {db} from "../firebase";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
    root: {
      margin:theme.spacing(2),
      display:'flex',
      border:"5px solid whitesmoke"
    },
    paper:{
        position:"absolute",
        width:400,
        backgroundColor:theme.palette.background.paper,
        border:"2px solid #000",
        boxShadow:theme.shadows[5],
        padding:theme.spacing(2,4,3)
    },
    button:{
        margin:theme.spacing(1)
    }
  }));

export default function Todo({task}) {
    const [open,setOpen] = useState(false);
    const [input,setInput] = useState(task.todo);
    const [description,setDescription] = useState(task.description);
    console.log(task)
    const classes = useStyles();

    const updateTodo = (e) => {
        e.preventDefault();
        db.collection('todos').doc(task.id).set({
            todo:input,
            description:description
        },{merge:true})
        setOpen(false)
    }

    const handleStatus = (e) => {
        e.preventDefault();
        db.collection('todos').doc(task.id).set({
            status:!task.status,
            completed_at:firebase.firestore.FieldValue.serverTimestamp(),
        },{merge:true})
    }
    
    return (
        <>
        <Modal open={open} onClose={(e) => setOpen(false)}>
            <div className={classes.paper}>
                <h1>Edit your task here...</h1>
                <Input value={input} onChange={(e) => setInput(e.target.value)}/>
                <TextField
                    label="Describe your task here"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
              />
                <Button onClick={updateTodo} variant="contained" color="primary">Update</Button>
            </div>
        </Modal>
        <List className={classes.root}>
            <ListItem>
                <ListItemText primary={task.todo} secondary={task.description} variant="h4" />
                {!task.status ? (<Button variant="contained" onClick={handleStatus}>{task.status ? "" : "Mark Complete"}</Button>) : (<Typography>completed</Typography>)}
                <Button className={classes.button} variant="contained" color="primary" onClick={e => setOpen(true)}>Edit</Button>
                <Button className={classes.button} variant="contained" color="secondary" onClick={(e) => db.collection('todos').doc(task.id).delete()}>Delete</Button>
            </ListItem>
        </List>
        </>
    )
}
