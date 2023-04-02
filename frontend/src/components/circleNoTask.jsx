import React, { useEffect, useState } from 'react';
import './circleNoTask.css';

import ProgressBar from "./ProgressBar";
import TaskCard from './Individual-task';

function CircleNoTask({ image, goal, tasks, addTask, removeTask, updateTask }) {
    const showButton = tasks.length < 4;
    const displayTasks = tasks.map(
        task => <TaskCard 
            name={task.title} 
            completed={task.completed} 
            key={task._id} 
            updateTask={(title, completed) => updateTask(task._id, title, completed)} 
            deleteTask={() => removeTask(task._id)} 
            />
    )
    const [showInput, setShowInput] = useState(false)

    const handleButtonClick = () => {
      setShowInput(true)
    };

    useEffect(() => {
        console.log("tasks changed")
        console.log(tasks)
    })

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const title = event.target[0].value;
        if (title.length < 5) return;
        addTask(title);
        setShowInput(false)
    }

    return (
        <div className="col">
            <img src={image} alt="profile" className="circle-1" />
            <ProgressBar progress="50" />
            <div className="goal">
                🎯 {goal}
            </div>
            <div>
                { displayTasks }
            </div>
            { showInput &&
                <form onSubmit={handleFormSubmit}
                style={{
                    width: "100%",
                }}
                >
                    <input placeholder="task?"
                    className="input-task"
                    ></input>
                    <input type="submit" style={{ display: "none" }} />
                </form>
            }
            { showButton &&
                <button className="button-no-task" onClick={handleButtonClick}>+ Add Task (Max 4)</button>
                }
        </div>
    );
}

export default CircleNoTask;