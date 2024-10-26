// Step1.js
import React, { useState, useEffect } from "react";

function Step1({ formData, updateFormData }) {
  const [title, setTitle] = useState(formData.title || "");
  const [overview, setOverview] = useState(formData.overview || "");

  // useEffect(() => {
  //   updateFormData({ title, overview });
  // }, [title, overview]);

  const save = () => {
    updateFormData({ title, overview });
  };

  return (
    <div>
      <h2>Step 1: Project Title and Overview</h2>
      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Project Overview"
        value={overview}
        onChange={(e) => setOverview(e.target.value)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}

export default Step1;
