// Step1.js
import React, { useState } from "react";
import "./step1.css";
function Step1({ formData, updateFormData }) {
  const [title, setTitle] = useState(formData.title || "");
  const [overview, setOverview] = useState(formData.overview || "");

  const save = () => {
    updateFormData({ title, overview });
  };

  return (
    <div className="step1_div">
      <h2>Step 1: Project Title and Overview</h2>
      <div className="title_div">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
      </div>
      <div className="title_div">
        <label htmlFor="overview">Overview:</label>

        <textarea
          placeholder="Project Overview"
          className="txt"
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
          name="overview"
        />
      </div>
      <button className="saveButton" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default Step1;
