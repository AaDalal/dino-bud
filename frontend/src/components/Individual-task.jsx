import React from 'react';
import PropTypes from 'prop-types';
import './Individual-task.css';

function TaskCard({ name, completed }) {
  return (
    <div className={`task-card ${completed ? 'completed' : ''}`}>
      <div className="task-card-text">
        <p>Learn Card Sorting</p>
      </div>
      <div className="task-card-icon">
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
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
};

export default TaskCard;
