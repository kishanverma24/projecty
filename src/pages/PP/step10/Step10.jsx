// Step10.js
import React, { useState, useEffect } from "react";

function Step10({ formData, updateFormData }) {
  const [timeline, setTimeline] = useState(formData.timeline || "");

  // useEffect(() => {
    // updateFormData({ timeline });
  // }, [timeline]);
  const save = () => {
    updateFormData({ timeline });
  };
  return (
    <div>
      <h2>Step 10: Timeline</h2>
      <textarea
        placeholder="Project Timeline"
        value={timeline}
        onChange={(e) => setTimeline(e.target.value)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}

export default Step10;
