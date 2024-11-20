// Step11.js
import React, { useState, useEffect } from "react";

function Step11({ formData, updateFormData }) {
  const [budget, setBudget] = useState(formData.budget || "");
  const [fundingStatus, setFundingStatus] = useState(
    formData.fundingStatus || ""
  );

  // useEffect(() => {
  //   updateFormData({ budget, fundingStatus });
  // }, [budget, fundingStatus]);
  const save = () => {
    updateFormData({ budget, fundingStatus });
  };

  return (
    <div>
      <h2>Step 11: Budget and Funding</h2>
      <input
        type="text"
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <textarea
        placeholder="Funding Status"
        value={fundingStatus}
        onChange={(e) => setFundingStatus(e.target.value)}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}

export default Step11;
