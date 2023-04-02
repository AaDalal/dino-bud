import React from 'react';
import './circleThreeTasks.css';
import ProgressBar from "./ProgressBar";
// import MultipleTasks from "./multiple-tasks";
import TaskCard from './Individual-task';


function circleThreeTasks() {
    return (
        <div className="circle-3">
              <div className="div-under">
                <ProgressBar progress="75" /></div>
              <div className="div-under-topic">
              🎯 Actually read
              </div>
              <div className="div-under-tasks">
                <TaskCard name="Learn Card Sorting" completed={true} />
                <TaskCard name="Finish React project" completed={false} />
                <TaskCard name="Help Rafael" completed={false} />
                {/* <TaskCard name="Eat Food" completed={false} /> */}
                <button class = "button-no-task">+ Add Task (Max 4)</button>
              </div>
        </div>
    );
}

export default circleThreeTasks;