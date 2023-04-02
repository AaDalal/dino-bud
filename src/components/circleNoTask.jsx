import React from 'react';
import './circleNoTask.css';
import { useState } from "react";
import Popup from "./Popup";

import ProgressBar from "./ProgressBar";

function CircleNoTask() {
   
    const [showPopup, setShowPopup] = useState(false);

    const handleButtonClick = () => {
      setShowPopup(true);
      console.log("clicked");
    };

    return (
        <div className="circle-1">
            <div className="div-under"><ProgressBar progress="50" /></div>
            <div className="div-under-topic">
                🎯 Learn UX Research
            </div>
            <div className="div-under-tasks">
                <button class="button-no-task" onClick={handleButtonClick}>+ Add Task (Max 4)</button>
                {showPopup && <Popup />}
            </div>
        </div>
    );
}

export default CircleNoTask;