// Step6.js
import React, { useState, useEffect } from "react";

function Step6({ formData, updateFormData }) {
  const [technologies, setTechnologies] = useState(formData.technologies || "");

  // useEffect(() => {
  //   updateFormData({ technologies });
  // }, [technologies]);

  const save = () => {
    updateFormData({ technologies });
};

  return (
    <div>
      <h2>Step 6: Technical Requirements</h2>
      <textarea
        placeholder="Technologies and Tools"
        value={technologies}
        onChange={(e) => setTechnologies(e.target.value)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}

export default Step6;
