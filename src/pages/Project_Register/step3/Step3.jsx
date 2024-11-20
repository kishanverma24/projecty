// Step3.js
import React, { useState, useEffect } from "react";
import "./step3.css";

function Step3({ formData, updateFormData }) {
  const [scope, setScope] = useState(formData.scope || "");

  // useEffect(() => {
  //   updateFormData({ scope });
  // }, [scope]);
  const save = () => {
    updateFormData({ scope });
};

  return (
    <div>
      <h2>Step 3: Project Scope</h2>
      <textarea
        placeholder="Project Scope"
        value={scope}
        onChange={(e) => setScope(e.target.value)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}

export default Step3;
