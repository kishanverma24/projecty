// Step4.js
import React, { useState, useEffect } from "react";

function Step4({ formData, updateFormData }) {
  const [deliverables, setDeliverables] = useState(formData.deliverables || "");

  // useEffect(() => {
  //   updateFormData({ deliverables });
  // }, [deliverables]);
  const save = () => {
    updateFormData({ deliverables });
  };
  return (
    <div>
      <h2>Step 4: Deliverables</h2>
      <textarea
        placeholder="Project Deliverables"
        value={deliverables}
        onChange={(e) => setDeliverables(e.target.value)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}

export default Step4;
