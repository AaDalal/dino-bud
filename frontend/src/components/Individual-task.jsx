import React from 'react';
import PropTypes from 'prop-types';
import './Individual-task.css';

function TaskCard({ name, completed, deleteTask, updateTask }) {
  return (
    <div className={`task-card ${completed ? 'completed' : ''}`}>
      <div className="task-card-text">
        <p>{name}</p>
      </div>
      <button 
      style={{
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
      }}
      className="task-card-icon" onClick={() => updateTask(name, !completed)}
      >
        {completed ? (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="10" fill="#4CAF50" stroke="white" strokeWidth="2"/>
            <path d="M7.64758 10.6666L9.49425 12.2322L13.7742 7.99994" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11" r="10" fill="white" stroke="#DADAE5" strokeWidth="2"/>
            <path d="M8 11H14" stroke="#9B9B9B" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        )}
      </button>
      <button 
      style={{
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
      }}
      className="task-card-icon" onClick={deleteTask}
      >
        <div style={{ color: 'red' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
        </div>
      </button>
    </div>
  );
}

TaskCard.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TaskCard;
