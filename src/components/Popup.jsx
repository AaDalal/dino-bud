import React, { useState } from "react";

const Popup = ({ closePopup }) => {
  const [task1, setTask1] = useState("");
  const [task2, setTask2] = useState("");
  const [task3, setTask3] = useState("");
  const [task4, setTask4] = useState("");

  const handleSave = () => {
    console.log("Tasks saved");
    console.log(task1, task2, task3, task4);
    // closePopup();
  };


  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p style={{ fontWeight: "bold", fontSize: "24px" }}>Add your 4 tasks ✨</p>
        <p style={{ color: "red" }}>⚠️ You can’t change your tasks after you save!</p>
        <input
          type="text"
          placeholder="Enter task1"
          value={task1}
          onChange={(e) => setTask1(e.target.value)}
          style={{ width: "375px", height: "62px" }}
        />
        <input
          type="text"
          placeholder="Enter task2"
          value={task2}
          onChange={(e) => setTask2(e.target.value)}
          style={{ width: "375px", height: "62px" }}
        />
        <input
          type="text"
          placeholder="Enter task3"
          value={task3}
          onChange={(e) => setTask3(e.target.value)}
          style={{ width: "375px", height: "62px" }}
        />
        <input
          type="text"
          placeholder="Enter task4"
          value={task4}
          onChange={(e) => setTask4(e.target.value)}
          style={{ width: "375px", height: "62px" }}
        />
        <div className="button-container">
          <button onClick={closePopup}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
