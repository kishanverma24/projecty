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

  // UseEffect hook to update form data when projectDuration or keyDates change
  useEffect(() => {
    updateFormData({ projectDuration, keyDates });
  }, [projectDuration, keyDates, updateFormData]);

  // Handle saving of data
  const save = () => {
    updateFormData({ projectDuration, keyDates });
  };

  // Handle updating a specific key date (like Prototype Completion, etc.)
  const handleKeyDateChange = (key, value) => {
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
              {/* Editable Key Date */}
              <textarea
                placeholder="Key Date"
                value={key}
                onChange={(e) => handleKeyDateChange(key, e.target.value)} // Handle key change
              />
              {/* Editable Key Date Value */}
              <textarea
                placeholder="Key Date Value"
                value={keyDates[key]}
                onChange={(e) => handleKeyDateChange(key, e.target.value)} // Handle value change
              />
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
        <button className="addButton" onClick={addNewKeyDate}>Add Key Date</button>{" "}
        {/* Button to add new key date */}
      </div>

      <button className="saveButton" onClick={save}>Save</button>
    </div>
  );
}

export default Step10;
