// Step12.js
import React, { useState, useEffect } from "react";

function Step12({ formData, updateFormData }) {
  const [contactInfo, setContactInfo] = useState(formData.contactInfo || "");
  const [communicationPlan, setCommunicationPlan] = useState(
    formData.communicationPlan || ""
  );

  // useEffect(() => {
  //   updateFormData({ contactInfo, communicationPlan });
  // }, [contactInfo, communicationPlan]);

  const save = () => {
    updateFormData({ contactInfo, communicationPlan });
};
  return (
    <div>
      <h2>Step 12: Contact Information and Communication Plan</h2>
      <input
        type="text"
        placeholder="Contact Information"
        value={contactInfo}
        onChange={(e) => setContactInfo(e.target.value)}
      />
      <textarea
        placeholder="Communication Plan"
        value={communicationPlan}
        onChange={(e) => setCommunicationPlan(e.target.value)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}

export default Step12;
