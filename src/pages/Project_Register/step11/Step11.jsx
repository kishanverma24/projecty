// Step11.js 
import React, { useState, useEffect } from "react";
import "./step11.css";

function Step11({ formData, updateFormData }) {
  // Initialize states
  const [primaryContact, setPrimaryContact] = useState(
    formData.primaryContact || { name: "", role: "" }
  );
  const [communicationChannels, setCommunicationChannels] = useState(
    formData.communicationChannels || { email: "", contact: "" }
  );
  const [demoLink, setDemoLink] = useState(formData.demoLink || "");
  const handlePrimaryContactChange = (e) => {
    const { name, value } = e.target;
    setPrimaryContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleCommunicationChannelChange = (e) => {
    const { name, value } = e.target;
    setCommunicationChannels((prevChannels) => ({
      ...prevChannels,
      [name]: value,
    }));
  };

  // Save function to update form data
  const save = () => {
    updateFormData({ primaryContact, communicationChannels, demoLink });
  };

  return (
    <div className="primaryContact_div">
      <h2>Step 11: Contact Information and Communication Plan</h2>

      {/* Primary Contact Information */}
      <h3>Primary Contact</h3>
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
      <input
        type="text"
        name="contact"
        placeholder="Contact"
        value={primaryContact.contact}
        onChange={handlePrimaryContactChange}
      />

      {/* Communication Channels */}
      <h3>Preferred Communication Channels</h3>
      <div className="subPrimaryContact_div">
        <h3>Email</h3>

        <input
          type="text"
          name="email"
          placeholder="Email Address"
          value={communicationChannels.email}
          onChange={handleCommunicationChannelChange}
        />
        <h3>Contact no</h3>

        <input
          type="text"
          name="contact"
          placeholder="Contact No"
          value={communicationChannels.contact}
          onChange={handleCommunicationChannelChange}
        />
      </div>
      <h3>Visual Demo Presentation link</h3>
      <div
        className="subPrimaryContact_div"
        style={{ justifyContent: "center" }}
      >
        <input
          type="text"
          name="demo"
          placeholder="Demo Link"
          value={demoLink}
          onChange={(e) => {
            setDemoLink(e.target.value);
          }}
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
