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
            <div className="ChatHeader">🍎 Ask Me To Help With Your Goals</div>
            <div className="ChatContent">
              <input type="text" placeholder="Send a message" />

            </div>
          </div>
          <br/>
          <br/>

          <div className="Subtitle">Helpful resources</div>
          <div className="ResourcesContainer">
            <div className="Resources"
            style={{
              overflow: "hidden",
            }}>
              <ResourceComponent
                image="https://img.youtube.com/vi/t3VW-qa8544/sddefault.jpg"
                title="Watch Figma's Intro"
                description="Figma says this is the place to start :)"
              />
              <ResourceComponent
                image="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fba81cfff-7bc5-4aef-866e-864d0942c42d_1000x1000.png"
                title="Substack + Figma"
                description="Read about how substack uses figma components"
              />
              <ResourceComponent
                image="https://www.softools.de/wp-content/uploads/2022/07/Figma-Logo.png"
                title="Wireframing"
                description="You can copy this template for wireframing"
              />
              <ResourceComponent
                image="https://img.youtube.com/vi/HZuk6Wkx_Eg/sddefault.jpg"
                title="Figma Tutorial"
                description="If you have more time, this is a great tutorial"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LearningAssistant;
