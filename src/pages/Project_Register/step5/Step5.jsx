import React, { useState } from "react";
import "./step5.css";

function Step5({ formData, updateFormData }) {
  const [milestones, setMilestones] = useState(
    typeof formData.milestones === "object" && formData.milestones !== null
      ? formData.milestones
      : {}
  );
  const [newMilestoneKey, setNewMilestoneKey] = useState("");
  const [newMilestoneValue, setNewMilestoneValue] = useState("");
  const [editableKey, setEditableKey] = useState({});

  const save = () => {
    updateFormData({ milestones });
  };

  const handleMilestoneValueChange = (key, value) => {
    setMilestones((prevMilestones) => ({
      ...prevMilestones,
      [key]: value, // Only update the value, not the key
    }));
  };

  const handleMilestoneKeyChange = (oldKey, newKey) => {
    if (newKey === oldKey || !newKey.trim()) return; // Avoid empty or same key

    setMilestones((prevMilestones) => {
      const { [oldKey]: _, ...rest } = prevMilestones; // Remove old key
      return {
        ...rest,
        [newKey]: prevMilestones[oldKey], // Add new key with the old value
      };
    });
  };

  const addNewMilestone = () => {
    if (newMilestoneKey.trim() === "" || newMilestoneValue.trim() === "")
      return;
    setMilestones((prevMilestones) => ({
      ...prevMilestones,
      [newMilestoneKey]: newMilestoneValue,
    }));
    setNewMilestoneKey(""); // Clear the key input
    setNewMilestoneValue(""); // Clear the value input
  };

  return (
    <div className="milestone_div">
      <h2>Step 5: Milestones</h2>
      {Object.keys(milestones).length !== 0
        ? Object.keys(milestones).map((key) => (
            <div className="subMilestone_div" key={key}>
              {/* Editable Key */}
              <textarea
                placeholder="Milestone Key"
                value={editableKey.hasOwnProperty(key) ? editableKey[key] : key}
                onChange={(e) =>
                  setEditableKey((prev) => ({ ...prev, [key]: e.target.value }))
                } // Handle key change
              />
              {/* Editable Value */}
              <textarea
                placeholder="Milestone Value"
                value={milestones[key]}
                onChange={
                  (e) => handleMilestoneValueChange(key, e.target.value) // Handle value change
                }
              />
              {editableKey.hasOwnProperty(key) ? (
                <button
                  onClick={() =>
                    handleMilestoneKeyChange(key, editableKey[key])
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

      {/* New Milestone Input */}
      <div className="subMilestone_div ">
        <input
          className="subMilestone_div_inp"
          type="text"
          placeholder="Milestone Key"
          value={newMilestoneKey}
          onChange={(e) => setNewMilestoneKey(e.target.value)}
        />
        <textarea
          placeholder="Milestone Value"
          value={newMilestoneValue}
          onChange={(e) => setNewMilestoneValue(e.target.value)}
        />
        <button className="addButton" onClick={addNewMilestone}>
          Add
        </button>
      </div>

      <button className="saveButton" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default Step5;
