import React, { useState } from "react";

const Technical_Requirments = () => {
  const [technologiesUsed, setTechnologiesUsed] = useState({});
  const [systemRequirments, setSystemRequirments] = useState({});

  return (
    <div>
      <h1>Technical Requirments</h1>
      <input
        type="text"
        value={technologiesUsed}
        onChange={(e) => setTechnologiesUsed(e.target.value)}
      />

      <input
        type="text"
        value={systemRequirments}
        onChange={(e) => {
          setSystemRequirments(e.target.value);
        }}
      />
      <button>Save</button>
    </div>
  );
};

export default Technical_Requirments;
