import React, { useState, useEffect } from "react";
import "./step7.css";

function Step7({ formData, updateFormData }) {
  const [systemRequirements, setSystemRequirements] = useState(
    typeof formData.systemRequirements === "object" &&
      formData.systemRequirements !== null
      ? formData.systemRequirements
      : {}
  );
  const [newRequirementKey, setNewRequirementKey] = useState(""); // For new key input
  const [newRequirementValue, setNewRequirementValue] = useState(""); // For new value input
  const [editableKey, setEditableKey] = useState({});

  const save = () => {
    updateFormData({ systemRequirements });
  };

  const handleRequirementValueChange = (key, value) => {
    setSystemRequirements((prevSystemRequirements) => ({
      ...prevSystemRequirements,
      [key]: value, // Update the value for the existing key
    }));
  };

  const handleRequirementKeyChange = (oldKey, newKey) => {
    if (newKey === oldKey || !newKey.trim()) return; // Avoid empty or same key

    setSystemRequirements((prevSystemRequirements) => {
      const { [oldKey]: _, ...rest } = prevSystemRequirements; // Remove old key
      return {
        ...rest,
        [newKey]: prevSystemRequirements[oldKey], // Add new key with the old value
      };
    });
  };

  const addNewRequirement = () => {
    if (newRequirementKey.trim() === "" || newRequirementValue.trim() === "")
      return;
    setSystemRequirements((prevSystemRequirements) => ({
      ...prevSystemRequirements,
      [newRequirementKey]: newRequirementValue, // Add new key-value pair
    }));
    setNewRequirementKey(""); // Clear the key input
    setNewRequirementValue(""); // Clear the value input
  };

  return (
    <div className="requirment_div">
      <h2>Step 7: System Requirements</h2>

      {/* Display existing system requirements */}
      {Object.keys(systemRequirements).length !== 0
        ? Object.keys(systemRequirements).map((key) => (
            <div className="subrequirment_div" key={key}>
              {/* Editable Key */}
              <textarea
                placeholder="Requirement Category"
                value={editableKey.hasOwnProperty(key) ? editableKey[key] : key}
                onChange={(e) =>
                  setEditableKey((prev) => ({
                    ...prev,
                    [key]: e.target.value,
                  }))
                }
              />
              {/* Editable Value */}
              <textarea
                placeholder="System Requirement"
                value={systemRequirements[key]}
                onChange={
                  (e) => handleRequirementValueChange(key, e.target.value) // Handle value change
                }
              />
              {editableKey.hasOwnProperty(key) ? (
                <button
                  onClick={() =>
                    handleRequirementKeyChange(key, editableKey[key])
                  }
                >
                  Save
                </button>
              ) : (
                <button type="button">Well</button>
              )}
            </div>
          ))
        : ""}

      {/* Input for adding new system requirement */}
      <div className="subrequirment_div">
        <input
          type="text"
          placeholder="Requirement Category (e.g., Operating System)"
          value={newRequirementKey}
          onChange={(e) => setNewRequirementKey(e.target.value)} // Handle key input
        />
        <textarea
          placeholder="Enter System Requirement"
          value={newRequirementValue}
          onChange={(e) => setNewRequirementValue(e.target.value)} // Handle value input
        />
        <button className="addButton" onClick={addNewRequirement}>
          Add
        </button>
      </div>

      <button className="saveButton" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default Step7;
