import TextField from '@mui/material/TextField';
import '../App.css';
import React from 'react';

export default function AddTodo(props) {
  
  const [tasks, setTasks] = React.useState({
    title:"",
    due:{date: new Date()},
    tag:"",
    status:"",
    description:""
  })
  
  function handleChange(event) {
    setTasks(prevTasks => {
        return {
            ...prevTasks,
            [event.target.name]: event.target.value
        }
    })
  }

  function handleSubmit(event){
    event.preventDefault()
    props.func(tasks)
    setTasks({
      title:"",
      due:{date: new Date()},
      tag:"",
      status:"",
      description:""
    })
  }
  


  return(
    <div className="form">
      <div className="form--top">
        <input
              type="text"
              onChange={handleChange}
              placeholder="Title"
              className="form--title"
              value={tasks.title}
              name="title"
        />
        <div className="form--due">
          <TextField
          id="dateDue"
          onChange={handleChange}
          label="Choose your due date"
          type="date"
          value={tasks.due}
          InputLabelProps={{
            shrink: true,
          }}
          name="due"
        />
        </div>
        <input
              type="text"
              onChange={handleChange}
              placeholder="Tag"
              className="form--tag"
              value={tasks.tag}
              name="tag"
        />
        <input
              onChange={handleChange}
              type="text"
              placeholder="Status"
              className="form--status"
              value={tasks.status}
              name="status"
        />
        <button 
          className="form--button"
          onClick={handleSubmit}
        >
          Add Task
        </button>
      </div>
      <textarea 
          onChange={handleChange}
          type="text"
          placeholder="Description"
          className="form--description"
          value={tasks.description}
          name="description"
          
        /> 
    </div>
  )
  }
  