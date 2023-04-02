import React from "react";
import "./LearningAssistant.css";
import ResourceComponent from "./ResourceComponent";

const LearningAssistant = () => {

  return (
    <>
      {(
        <div className="LearningAssistant">
          <br />
          <br />
          <div className="Title">🕵️‍♀️ Learning Assistant</div>
          <br/>
          <div className="ChatBox">
            <div className="ChatHeader">🍎 Ask Me Anything</div>
            <div className="ChatContent">
              <input type="text" placeholder="Send a message" />

            </div>
          </div>
          <br/>
          <br/>

          <div className="Subtitle">Helpful resources</div>
          <div className="ResourcesContainer">
            <div className="Resources">
              <ResourceComponent
                image="https://i.imgur.com/Fpimfn0.png"
                title="Resource 1"
                description="Description of resource 1"
              />
              <ResourceComponent
                image="https://i.imgur.com/Fpimfn0.png"
                title="Resource 2"
                description="Description of resource 2"
              />
              <ResourceComponent
                image="https://i.imgur.com/Fpimfn0.png"
                title="Resource 3"
                description="Description of resource 3"
              />
              <ResourceComponent
                image="https://i.imgur.com/Fpimfn0.png"
                title="Resource 4"
                description="Description of resource 4"
              />
              <ResourceComponent
                image="https://i.imgur.com/Fpimfn0.png"
                title="Resource 4"
                description="Description of resource 4"
              />
              <ResourceComponent
                image="https://i.imgur.com/Fpimfn0.png"
                title="Resource 4"
                description="Description of resource 4"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LearningAssistant;
