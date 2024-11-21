// Step12.js (Improved Contact Information and Communication Plan Component)
import React, { useState, useEffect } from "react";
import "./step11.css";

function Step11({ formData, updateFormData }) {
  // Initialize states
  const [primaryContact, setPrimaryContact] = useState(
    formData.primaryContact || { name: "", role: "" }
  );
  const [communicationChannels, setCommunicationChannels] = useState(
    formData.communicationChannels || { email: "", slack: "" }
  );

  const handlePrimaryContactChange = (e) => {
    const { name, value } = e.target;
    setPrimaryContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  // Handle change for communication channels (email, slack)
  const handleCommunicationChannelChange = (e) => {
    const { name, value } = e.target;
    setCommunicationChannels((prevChannels) => ({
      ...prevChannels,
      [name]: value,
    }));
  };

  // Save function to update form data
  const save = () => {
    updateFormData({ primaryContact, communicationChannels });
  };

  return (
    <div className="primaryContact_div">
      <h2>Step 11: Contact Information and Communication Plan</h2>

      {/* Primary Contact Information */}
      <h>Primary Contact</h>
      <div className="subPrimaryContact_div">
        <input
          type="text"
          name="name"
          placeholder="Contact Name"
          value={primaryContact.name}
          onChange={handlePrimaryContactChange}
        />
        <input
          type="text"
          name="role"
          placeholder="Contact Role"
          value={primaryContact.role}
          onChange={handlePrimaryContactChange}
        />
      </div>

      {/* Communication Channels */}
      <h3>Preferred Communication Channels</h3>
      <div className="subPrimaryContact_div">
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          value={communicationChannels.email}
          onChange={handleCommunicationChannelChange}
        />
        <input
          type="text"
          name="slack"
          placeholder="Slack Username"
          value={communicationChannels.slack}
          onChange={handleCommunicationChannelChange}
        />
      </div>

      {/* Save Button */}
      <button className="saveButton" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default Step11;
