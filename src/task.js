import React from 'react'

const Task = (props) => {
  return (
    <li  style={{ backgroundColor: props.completed ? "green" : "#92730c"}}>
         <p>{props.taskName}</p>
          <div className="complete-delete-container">
            <button className="complete-delete save-button btn" onClick={() => props.colorize(props.id)}>
              <span className="completed">Completed</span>
            </button>
            <button className="complete-delete btn" onClick={() => props.dels(props.id)}>
              <span className="delete">Delete</span>
            </button>
          </div>  
    </li>
  )
}

export default Task