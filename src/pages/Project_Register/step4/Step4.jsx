import React, { useState } from "react";
import "./step4.css";

function Step4({ formData, updateFormData }) {
  const [deliverables, setDeliverables] = useState(
    Array.isArray(formData.deliverables) ? formData.deliverables : []
  );
  const [newDeliverable, setNewDeliverable] = useState(""); // State for the new deliverable input

  const save = () => {
    updateFormData({ deliverables });
  };

  const handleDeliverableChange = (index, value) => {
    const newDeliverables = [...deliverables];
    newDeliverables[index] = value; // Update the specific index
    setDeliverables(newDeliverables); // Set the updated array
  };

  const handleNewDeliverableChange = (e) => {
    setNewDeliverable(e.target.value); // Update the state for the new deliverable input
  };

  const addNewDeliverable = () => {
    if (newDeliverable.trim() === "") return; // Don't add empty deliverables
    setDeliverables([...deliverables, newDeliverable]); // Add the new deliverable
    setNewDeliverable(""); // Clear the input field
  };

  return (
    <div className="deliverable_div">
      <h2>Step 4: Deliverables</h2>
      {deliverables.length !== 0
        ? deliverables.map((del, index) => (
            <textarea
              key={index} // Always add a key when rendering lists
              placeholder="Project Deliverables"
              value={del}
              onChange={(e) => handleDeliverableChange(index, e.target.value)} // Pass index and new value
            />
          ))
        : ""}
      <div>
        <textarea
          placeholder="Add New Deliverable"
          value={newDeliverable} // Bind to new deliverable state
          onChange={handleNewDeliverableChange} // Handle changes for the new input
        />
        <button className="addButton" onClick={addNewDeliverable}>
          Add
        </button>{" "}
      </div>
      {/* Button to add new deliverable */}
      <button className="saveButton" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default Step4;
