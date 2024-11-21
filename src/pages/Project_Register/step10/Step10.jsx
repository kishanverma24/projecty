// StepX.js (Timeline Component)
import React, { useState, useEffect } from "react";
import "./step10.css";

function Step10({ formData, updateFormData }) {
  // Initialize state for project duration and key dates
  const [projectDuration, setProjectDuration] = useState(
    formData.projectDuration || ""
  );
  const [keyDates, setKeyDates] = useState(
    typeof formData.keyDates === "object" && formData.keyDates !== null
      ? formData.keyDates
      : {}
  );
  const [newKeyDateKey, setNewKeyDateKey] = useState(""); // For adding new key date title
  const [newKeyDateValue, setNewKeyDateValue] = useState(""); // For adding new key date value
  const [editableKey, setEditableKey] = useState({});

  // Handle saving of data
  const save = () => {
    updateFormData({ projectDuration, keyDates });
  };

  // Handle updating a specific key date key (like Prototype Completion, etc.)
  const handleKeyDatesKeyChange = (oldKey, newKey) => {
    if (newKey === oldKey || !newKey.trim()) return; // Avoid empty or same key

    setKeyDates((prevKeyDates) => {
      const { [oldKey]: _, ...rest } = prevKeyDates; // Remove old key
      return {
        ...rest,
        [newKey]: prevKeyDates[oldKey], // Add new key with the old value
      };
    });
  };
  // Handle updating a specific key date (like Prototype Completion, etc.)
  const handleKeyDateValueChange = (key, value) => {
    setKeyDates((prevDates) => ({
      ...prevDates,
      [key]: value, // Update the value of a specific key date
    }));
  };

  // Handle new key date (title and value) inputs
  const handleNewKeyDateKeyChange = (e) => setNewKeyDateKey(e.target.value);
  const handleNewKeyDateValueChange = (e) => setNewKeyDateValue(e.target.value);

  // Add new key date to the keyDates object
  const addNewKeyDate = () => {
    if (newKeyDateKey.trim() === "" || newKeyDateValue.trim() === "") return;
    setKeyDates((prevDates) => ({
      ...prevDates,
      [newKeyDateKey]: newKeyDateValue, // Add new key-value pair
    }));
    setNewKeyDateKey(""); // Clear the new key input
    setNewKeyDateValue(""); // Clear the new value input
  };

  return (
    <div className="projectDuration_div">
      <h2>Step 10: Timeline</h2>

      {/* Project Duration Section */}
      <h3>Project Duration</h3>
      <textarea
        placeholder="Project Duration (e.g., September 2024 – September 2025)"
        value={projectDuration}
        onChange={(e) => setProjectDuration(e.target.value)}
      />

      {/* Key Dates Section */}
      <h3>Key Dates</h3>
      {Object.keys(keyDates).length !== 0
        ? Object.keys(keyDates).map((key) => (
            <div className="subDuration_div" key={key}>
              {/* Editable Key Date Key */}
              <textarea
                placeholder="Key Date"
                value={editableKey.hasOwnProperty(key) ? editableKey[key] : key}
                onChange={(e) =>
                  setEditableKey((prev) => ({
                    ...prev,
                    [key]: e.target.value,
                  }))
                }
              />
              {/* Editable Key Date Value */}
              <textarea
                placeholder="Key Date Value"
                value={keyDates[key]}
                onChange={(e) => handleKeyDateValueChange(key, e.target.value)} // Handle value change
              />

              {editableKey.hasOwnProperty(key) ? (
                <button
                  onClick={() => handleKeyDatesKeyChange(key, editableKey[key])}
                >
                  Save
                </button>
              ) : (
                <button type="button">Well</button>
              )}
            </div>
          ))
        : ""}

      {/* New Key Date Inputs */}
      <div className="subDuration_div">
        <input
          type="text"
          placeholder="New Key Date"
          value={newKeyDateKey}
          onChange={handleNewKeyDateKeyChange} // Handle changes for the new key input
        />
        <textarea
          placeholder="New Key Date Value"
          value={newKeyDateValue}
          onChange={handleNewKeyDateValueChange} // Handle changes for the new value input
        />
        <button className="addbutton" onClick={addNewKeyDate}>
          Add Key Date
        </button>{" "}
        {/* Button to add new key date */}
      </div>

      <button className="saveButton" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default Step10;
