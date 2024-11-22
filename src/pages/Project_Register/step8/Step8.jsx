// Step8.js
import React, { useState, useEffect } from "react";
import "./step8.css";

function Step8({ formData, updateFormData }) {
  const [developmentStage, setDevelopmentStage] = useState(
    formData.developmentStage || ""
  );
  const [progress, setProgress] = useState(
    Array.isArray(formData.progress) ? formData.progress : []
  );
  const [newProgress, setNewProgress] = useState(""); 

  const save = () => {
    updateFormData({ developmentStage, progress });
  };
  const handleProgressChange = (index, value) => {
    const newProgress = [...progress];
    newProgress[index] = value; 
    setProgress(newProgress); 
  };

  const handleNewProgressChange = (e) => {
    setNewProgress(e.target.value); 
  };

  const addNewProgress = () => {
    if (newProgress.trim() === "") return; 
    setProgress([...progress, newProgress]); 
    setNewProgress(""); // Clear the input field
  };

  return (
    <div className="development_div">
      <h2>Step 8: Current Status and Progress</h2>
      <h3>Development Stage</h3>
      <textarea
        placeholder="Current Project Progress"
        value={developmentStage}
        onChange={(e) => setDevelopmentStage(e.target.value)}
      />

      <h3>Progress</h3>
      {progress.length !== 0
        ? progress.map((prog, index) => (
            <textarea
              key={index} // Always add a key when rendering lists
              placeholder="Progress"
              value={prog}
              onChange={(e) => handleProgressChange(index, e.target.value)} // Pass index and new value
            />
          ))
        : console.log("No deliverables")}
      <div className="addbutton_div">
        <textarea
          placeholder="Add New Progress"
          value={newProgress} 
          onChange={handleNewProgressChange} 
        />
        <button className="addButton" onClick={addNewProgress}>
          Add Progress
        </button>{" "}
      </div>
      <button className="saveButton" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default Step8;
