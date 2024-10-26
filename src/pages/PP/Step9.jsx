// Step9.js
import React, { useState, useEffect } from "react";

function Step9({ formData, updateFormData }) {
  const [collaborationNeeds, setCollaborationNeeds] = useState(
    formData.collaborationNeeds || ""
  );

  // useEffect(() => {
  //   updateFormData({ collaborationNeeds });
  // }, [collaborationNeeds]);
  const save = () => {
    updateFormData({ collaborationNeeds });
};
  return (
    <div>
      <h2>Step 9: Collaboration Needs</h2>
      <textarea
        placeholder="Collaboration Needs"
        value={collaborationNeeds}
        onChange={(e) => setCollaborationNeeds(e.target.value)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}

export default Step9;
