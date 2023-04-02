import React from 'react';
import TaskCard from './Individual-task';

function MultipleTasks() {
  return (
    <div>
      <TaskCard name="Learn Card Sorting" completed={true} />
      <TaskCard name="Finish React project" completed={false} />
      <TaskCard name="Help Rafael" completed={false} />
      <TaskCard name="Eat Food" completed={false} />
    </div>
  );
}

export default MultipleTasks;
