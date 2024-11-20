import React, { useState, useEffect } from "react";
import "./step5.css";

function Step5({ formData, updateFormData }) {
  const [milestones, setMilestones] = useState(
    typeof formData.milestones === "object" && formData.milestones !== null
      ? formData.milestones
      : {}
  );
  const [newMilestoneKey, setNewMilestoneKey] = useState("");
  const [newMilestoneValue, setNewMilestoneValue] = useState("");

  useEffect(() => {
    updateFormData({ milestones });
  }, [milestones, updateFormData]);

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
    <div>
      <h2>Step 5: Milestones</h2>
      {Object.keys(milestones).length !== 0 ? (
        Object.keys(milestones).map((key) => (
          <div key={key}>
            {/* Editable Key */}
            <textarea
              placeholder="Milestone Key"
              value={key}
              onChange={
                (e) => handleMilestoneKeyChange(key, e.target.value) // Handle key change
              }
            />
            {/* Editable Value */}
            <textarea
              placeholder="Milestone Value"
              value={milestones[key]}
              onChange={
                (e) => handleMilestoneValueChange(key, e.target.value) // Handle value change
              }
            />
          </div>
        ))
      ) : ("")}

      {/* New Milestone Input */}
      <div>
        <input
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
        <button onClick={addNewMilestone}>Add Milestone</button>
      </div>

      <button onClick={save}>Save</button>
    </div>
  );
}

export default Step5;
