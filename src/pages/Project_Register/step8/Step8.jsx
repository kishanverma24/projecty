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
  const [newProgress, setNewProgress] = useState(""); // State for the new deliverable input

  // useEffect(() => {
  //   updateFormData({ progress });
  // }, [progress]);
  const save = () => {
    updateFormData({ developmentStage,progress });
  };
  const handleProgressChange = (index, value) => {
    const newProgress = [...progress];
    newProgress[index] = value; // Update the specific index
    setProgress(newProgress); // Set the updated array
  };

  const handleNewProgressChange = (e) => {
    setNewProgress(e.target.value); // Update the state for the new deliverable input
  };

  const addNewProgress = () => {
    if (newProgress.trim() === "") return; // Don't add empty deliverables
    setProgress([...progress, newProgress]); // Add the new deliverable
    setNewProgress(""); // Clear the input field
  };

  return (
    <div>
      <h2>Step 8: Current Status and Progress</h2>
      <h5>Development Stage</h5>
      <textarea
        placeholder="Current Project Progress"
        value={developmentStage}
        onChange={(e) => setDevelopmentStage(e.target.value)}
      />
     
      <div>
      <h5>Progress</h5>
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
      <textarea
        placeholder="Add New Progress"
        value={newProgress} // Bind to new deliverable state
        onChange={handleNewProgressChange} // Handle changes for the new input
      />
      <button onClick={addNewProgress}>Add Progress</button>{" "}
      {/* Button to add new deliverable */}
    </div>
      <button onClick={save}>Save</button>
    </div>
  );
}

export default Step8;