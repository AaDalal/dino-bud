import React from 'react';
import './circleNoTask.css';

import ProgressBar from "./ProgressBar";
import TaskCard from './Individual-task';

function CircleNoTask({ image, goal, tasks }) {
    const showButton = tasks.length < 4;
    const displayTasks = tasks.map(
        task => <TaskCard name={task.title} completed={task.completed} />
    )

    const handleButtonClick = () => {
      console.log("clicked");
    };

    return (
        <div className="col">
            <img src={image} alt="profile" class="circle-1" />
            <ProgressBar progress="50" />
            <div className="goal">
                🎯 {goal}
            </div>
            <div>
                { displayTasks }
            </div>
            { showButton &&
                <button className="button-no-task" onClick={handleButtonClick}>+ Add Task (Max 4)</button>
                }
        </div>
    );
}

export default CircleNoTask;