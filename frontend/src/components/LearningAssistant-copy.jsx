import React from "react";
import "./LearningAssistant-copy.css";
import CircleNoTask from "./circleNoTask";
import CircleFourTasks from "./circleFourTasks";


const LearningAssistantcopy = () => {
  

  
  return (
    <div className="LearningAssistantcopy">
      <div className="container">
        <div className="header">
          <button className="white-button">Ariya &#9660;</button>
        </div>
        <div className="main">
          <div className="big-text">
            <span role="img" aria-label="sparkle">✨</span> You're now Joseph's accountability partner <span role="img" aria-label="sparkle">✨</span>
          </div>
          <div className="small-text">
            If you don't complete your tasks, you will donate $5 to the opposing political party.
          </div>
          <div className="circles">  
            {/* <CircleOneTasks /> */}
            <CircleNoTask />
            {/* <CircleTwoTasks /> */}
            {/* <CircleFourTasks /> */}
            <div className="circle-2"></div>
            <CircleFourTasks />
            {/* <CircleThreeTasks /> */}
            {/* <CircleNoTask/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningAssistantcopy;


/*

  <div className="circle-1">
              <div className="div-under"><ProgressBar progress="50" /></div>
              
              <div className="div-under-topic">
              🎯 Learn UX Research  
              </div>
              <div className="div-under-tasks">
              <button class = "button-no-task">+ Add Task (Max 4)</button>
              </div>
            </div> 

*/