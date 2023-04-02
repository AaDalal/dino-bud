import React from "react";
import "./TaskCard.css";

const TaskCard = ({ title, tasks }) => {
  const taskCardRef = React.useRef(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (taskCardRef.current) {
      const titleHeight = taskCardRef.current.querySelector(
        ".task-card-title"
      ).clientHeight;
      const taskHeight = taskCardRef.current.querySelector(
        ".task-card-task"
      ).clientHeight;
      const numTasks = tasks.length;
      const padding = 20;
      const gap = 10;
      const newHeight = titleHeight + numTasks * taskHeight + padding * 2 + (numTasks - 1) * gap;
      setHeight(newHeight);
    }
  }, [tasks]);

  return (
    <div
      className="task-card"
      style={{
        height: height + "px"
      }}
      ref={taskCardRef}
    >
      <div className="task-card-title">{title}</div>
      {tasks.map((task, index) => (
        <div className="task-card-task" key={index}>
          <div className="task-card-task-name">{task.name}</div>
          <div className="task-card-task-settings">
            <div className="task-card-task-radio-container">
              <input
                type="radio"
                className="task-card-task-radio"
                checked={task.completed}
                readOnly
              />
            </div>
            <div className="task-card-task-icon">&#9881;</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskCard;
