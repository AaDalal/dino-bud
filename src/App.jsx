import React from "react";
import "./App.css";
import LearningAssistant from "./components/LearningAssistant";
// import LearningAssistant from "./components/LearningAssistant";
import LearningAssistantcopy from "./components/LearningAssistant-copy";

function App() {
  return (

    <div class="App">
      <LearningAssistantcopy />
      <LearningAssistant/>
    </div>

    // <div className="App">
    //    {/* <LearningAssistant />  */}
    //   <LearningAssistantcopy />
    // </div>
  );
}

export default App;



/*
const taskCards = [
  {
    title: "Task Card 1",
    tasks: [
      { name: "Task 1", completed: true },
      { name: "Task 2", completed: false },
      { name: "Task 3", completed: true },
      { name: "Task 4", completed: false },
    ],
  },
  {
    title: "Task Card 2",
    tasks: [
      { name: "Task 1", completed: true },
      { name: "Task 2", completed: true },
      { name: "Task 3", completed: true },
      { name: "Task 4", completed: true },
    ],
  },
];
*/

// {taskCards.map((card, index) => (
//   <TaskCard key={index} title={card.title} tasks={card.tasks} />
// ))}



/*{ <div className="parent-container">
      <GoalConsequenceForm/>
</div>

.parent-container {
  display: flex;
  justify-content: right;
  align-items: right;
  height: 100vh;
} }*/