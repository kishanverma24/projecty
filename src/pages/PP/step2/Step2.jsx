// Step2.js
import React, { useState, useEffect } from "react";

function Step2({ formData, updateFormData }) {
  const [description, setDescription] = useState(formData.description || "");
  const [objective, setObjective] = useState(formData.objective || "");

  // useEffect(() => {
  //   updateFormData({ description, objective });
  // }, [description, objective]);
  const save = () => {
    updateFormData({ description, objective });
};

  return (
    <div>
      <h2>Step 2: Problem Statement</h2>
      <textarea
        placeholder="Problem Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <textarea
        placeholder="Project Objective"
        value={objective}
        onChange={(e) => setObjective(e.target.value)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}

export default Step2;
