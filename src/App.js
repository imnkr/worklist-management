import "./App.css";
import Tasks from "./Tasks.js";
import React, { useState, useEffect } from "react";

const TasksProp = {
  name: "",
  completion: false
}
export default function App() {
  let [tasksList, setTaskList] = useState([TasksProp]);

  useEffect(() => {
   console.log(tasksList);
   window.alert("task completed")
  });

  function handleChange(event, task) {
    let { name, type } = event.target;
    let targetValue = type === "checkbox" ? "checked": "value";
    task[name] = event.target[targetValue]
    setTaskList((prevState) => {
     let newList = [...prevState];
     newList[task.index] = task
     return newList;
    });
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      {tasksList.map((task, index) => 
        <Tasks key={index} task={{...task, index }} handleChange={handleChange} />
      )}
      <button onClick={() => setTaskList(() => ([...tasksList, TasksProp]))}>+Add New Task</button>
    </div>
  );
}
