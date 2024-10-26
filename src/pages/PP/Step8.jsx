// Step8.js
import React, { useState, useEffect } from "react";

function Step8({ formData, updateFormData }) {
  const [progress, setProgress] = useState(formData.progress || "");

  // useEffect(() => {
  //   updateFormData({ progress });
  // }, [progress]);
  const save = () => {
    updateFormData({ progress });
};

  return (
    <div>
      <h2>Step 8: Current Status and Progress</h2>
      <textarea
        placeholder="Current Project Progress"
        value={progress}
        onChange={(e) => setProgress(e.target.value)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}

export default Step8;
