// Step7.js
import React, { useState, useEffect } from "react";

function Step7({ formData, updateFormData }) {
  const [systemRequirements, setSystemRequirements] = useState(
    formData.systemRequirements || ""
  );

  // useEffect(() => {
  //   updateFormData({ systemRequirements });
  // }, [systemRequirements]);
  const save = () => {
    updateFormData({ systemRequirements });
};

  return (
    <div>
      <h2>Step 7: System Requirements</h2>
      <textarea
        placeholder="System Requirements"
        value={systemRequirements}
        onChange={(e) => setSystemRequirements(e.target.value)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}

export default Step7;
