// PROJECT TITLE, OVERVIEW, PROBLEM STATEMENT

import React, { useState } from "react";
import "./project_title.css";
const Project_Title_Overview = () => {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [description, setDescription] = useState("");
  const [objective, setObjective] = useState("");

  const handleSave = (e) => {
    // e.preventDefault();
    console.log(
      "\n",
      "Title:" + title,
      "\n",
      "Overview::" + overview,
      "\n",
      "Description:" + description,
      "\n",
      "Objective:" + objective,
      "\n"
    );
  };
  return (
    <div className="div1">
      <h1>Project Title & Overview</h1>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={overview}
        placeholder="Overview"
        onChange={(e) => setOverview(e.target.value)}
      />
      <input
        type="text"
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        value={objective}
        placeholder="Objective"
        onChange={(e) => setObjective(e.target.value)}
      />
      <button className="bp1" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default Project_Title_Overview;
