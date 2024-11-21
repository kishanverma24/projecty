// Step2.js
import React, { useState } from "react";
import "./step2.css";
function Step2({ formData, updateFormData }) {
  const [description, setDescription] = useState(formData.description || "");
  const [objective, setObjective] = useState(formData.objective || "");

  const save = () => {
    updateFormData({ description, objective });
  };

  return (
    <div className="step2_div">
      <h2>Step 2: Problem Statement</h2>
      <div className="problem_desc_div">
        <label htmlFor="problem description">Problem Description:</label>

        <textarea
          placeholder="Problem Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="problem description"
        />
      </div>
      <div className="problem_desc_div">
        <label htmlFor="project objective">Project Objective</label>
        <textarea
          placeholder="Project Objective"
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
          name="project objective"
        />
      </div>
      <button className="saveButton" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default Step2;
