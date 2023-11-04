import { useState } from 'react';
import './App.css';
import Task from './task';


function App() {
  const [toDoList, setToDoList] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }

    //push the task variable to the todoList using spread operator
    setToDoList([...toDoList, task])
  }

  const colorize = (id) =>{
    const comp = toDoList.map((task) => {
      if (task.id === id){
        if ( task.completed ){
          //modify the "completed" value of the current index
          //using spread operator
          return {...task, completed: false};
        } else {
        return {...task, completed: true};
        }
      } else {
        return task
      }
    })
    setToDoList(comp)
  }
  const dels = (id) => {   
    const newTodoList = toDoList.filter((task) => {
      // if (tasks === taskName){
      //   return false
      // } else {
      //   return true
      // }
      // ********** using just "not strict equality" operator
      return task.id !== id;
    })
  setToDoList(newTodoList)
  }

  const clearToDo = () => {
    setToDoList([])
  }

  // ************   FOR HTML   *****************
  return (
    <div className="todo-container">
    <header>   
       <p>Create a To do List</p>
    </header>
    <div id="item-form">
        <div className="inputs-buttons-div">
            <input             
            className="form-input"            
            placeholder="Enter To Do Item"
            onChange={handleChange}
            />         
        </div>
        <div className="inputs-buttons-div">
            <button type="submit" className="toDoBtn" onClick={addTask
            }>Add To Do</button>
            <button type="submit" className="toDoBtn">Search To Do</button>
            <button id="clear" onClick={clearToDo} className="toDoBtn">Clear To Do List</button>
        </div>
    </div>
    <ul className="item-list">
    {toDoList.map((task, key)=>{
              return (
                <Task key={key}
                taskName={task.taskName} 
                id={task.id} 
                completed={task.completed}
                dels={dels}
                colorize={colorize}
                />
              )
                      
            })}
      </ul>
    </div>
  );
}

export default App;
