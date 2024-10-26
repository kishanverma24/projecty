// Step5.js
import React, { useState, useEffect } from "react";

function Step5({ formData, updateFormData }) {
  const [milestones, setMilestones] = useState(formData.milestones || "");

  // useEffect(() => {
  //   updateFormData({ milestones });
  // }, [milestones]);

  const save = () => {
    updateFormData({ milestones });
  };

  return (
    <div>
      <h2>Step 5: Milestones</h2>
      <textarea
        placeholder="Project Milestones"
        value={milestones}
        onChange={(e) => setMilestones(e.target.value)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}

export default Step5;
