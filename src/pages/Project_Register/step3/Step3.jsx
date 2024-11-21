// Step3.js
import React, { useState } from "react";
import "./step3.css";

function Step3({ formData, updateFormData }) {
  const [scope, setScope] = useState(formData.scope || "");

  const save = () => {
    updateFormData({ scope });
  };

  return (
    <div className="scope_div">
      <h2>Step 3: Project Scope</h2>
      <textarea
        placeholder="Project Scope"
        value={scope}
        onChange={(e) => setScope(e.target.value)}
      />
      <button className="saveButton" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default Step3;
