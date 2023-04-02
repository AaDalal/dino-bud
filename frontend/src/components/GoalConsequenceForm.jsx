import React, { useState } from 'react';
import './GoalConsequenceForm.css';

const GoalConsequenceForm = () => {
  const [goal, setGoal] = useState('');
  const [consequence, setConsequence] = useState('');

  const handleGoalChange = (event) => {
    setGoal(event.target.value);
  };

  const handleConsequenceChange = (event) => {
    setConsequence(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Goal: ${goal}`);
    console.log(`Consequence: ${consequence}`);
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <label htmlFor="goal-input">What is your goal?</label>
          <br />
          <input
            id="goal-input"
            type="text"
            value={goal}
            onChange={handleGoalChange}
            placeholder="Enter your goal here"
            className="input-box"
          />
          <br />
          <label htmlFor="consequence-input">
            If you didn't finish, you will...
          </label>
          <br />
          <input
            id="consequence-input"
            type="text"
            value={consequence}
            onChange={handleConsequenceChange}
            placeholder="Enter your consequence here"
            className="input-box"
          />
          <br />
          <button type="submit" className="next-button">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default GoalConsequenceForm;
