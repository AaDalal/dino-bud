import React from "react";
import "./ResourceComponent.css";
// import "./LearningAssistant.css";

const ResourceComponent = ({ image, title, description }) => {
  return (
    <div className="ResourceComponent">
      <div className="imageWrapper"><img src={image} alt={title} /></div>
      <div className="resource-details">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default ResourceComponent;
