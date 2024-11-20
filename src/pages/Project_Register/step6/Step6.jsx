import React, { useState, useEffect } from "react";
import "./step6.css";

function Step6({ formData, updateFormData }) {
  const [technologies, setTechnologies] = useState(
    typeof formData.technologies === "object" && formData.technologies !== null
      ? formData.technologies
      : {}
  );
  const [newTechnologyKey, setNewTechnologyKey] = useState(""); // For new key input
  const [newTechnologyValue, setNewTechnologyValue] = useState(""); // For new value input

  useEffect(() => {
    updateFormData({ technologies });
  }, [technologies, updateFormData]);

  const save = () => {
    updateFormData({ technologies });
  };

  const handleTechnologyValueChange = (key, value) => {
    setTechnologies((prevTechnologies) => ({
      ...prevTechnologies,
      [key]: value, // Update the value for the existing key
    }));
  };

  const handleTechnologyKeyChange = (oldKey, newKey) => {
    if (newKey === oldKey || !newKey.trim()) return; // Avoid empty or same key

    setTechnologies((prevTechnologies) => {
      const { [oldKey]: _, ...rest } = prevTechnologies; // Remove old key
      return {
        ...rest,
        [newKey]: prevTechnologies[oldKey], // Add new key with the old value
      };
    });
  };

  const addNewTechnology = () => {
    if (newTechnologyKey.trim() === "" || newTechnologyValue.trim() === "")
      return;
    setTechnologies((prevTechnologies) => ({
      ...prevTechnologies,
      [newTechnologyKey]: newTechnologyValue, // Add new key-value pair
    }));
    setNewTechnologyKey(""); // Clear the key input
    setNewTechnologyValue(""); // Clear the value input
  };

  return (
    <div>
      <h2>Step 6: Technical Requirements</h2>

      {/* Display existing technologies */}
      {Object.keys(technologies).length !== 0 ? (
        Object.keys(technologies).map((key) => (
          <div key={key}>
            {/* Editable Key */}
            <textarea
              placeholder="Technology Category"
              value={key}
              onChange={(e) => handleTechnologyKeyChange(key, e.target.value)} // Handle key change
            />
            {/* Editable Value */}
            <textarea
              placeholder="Technologies"
              value={technologies[key]}
              onChange={
                (e) => handleTechnologyValueChange(key, e.target.value) // Handle value change
              }
            />
          </div>
        ))
      ) : (
        ("")
      )}

      {/* Input for adding new technology */}
      <div>
        <input
          type="text"
          placeholder="Technology Category (e.g., Programming Languages)"
          value={newTechnologyKey}
          onChange={(e) => setNewTechnologyKey(e.target.value)} // Handle key input
        />
        <textarea
          placeholder="Enter Technologies"
          value={newTechnologyValue}
          onChange={(e) => setNewTechnologyValue(e.target.value)} // Handle value input
        />
        <button onClick={addNewTechnology}>Add Technology</button>
      </div>

      <button onClick={save}>Save</button>
    </div>
  );
}

export default Step6;
