import React, { useState } from "react";
import "./step12.css";

function Step4({ formData, updateFormData }) {
  const [tags, setTags] = useState(
    Array.isArray(formData.tags) ? formData.tags : []
  );
  const [newTag, setNewTag] = useState(""); // State for the new tag input

  const save = () => {
    updateFormData({ tags });
  };

  const handleTagChange = (index, value) => {
    const newTag = [...tags];
    newTag[index] = value; // Update the specific index
    setTags(newTag); // Set the updated array
  };

  const handleNewTagChange = (e) => {
    setNewTag(e.target.value); // Update the state for the new tag input
  };

  const addNewTag = () => {
    if (newTag.trim() === "") return; // Don't add empty tag
    setTags([...tags, newTag]); // Add the new tag
    setNewTag(""); // Clear the input field
  };

  return (
    <div className="tag_div">
      <h2>Step 12: Tags</h2>
      {tags.length !== 0
        ? tags.map((tag, index) => (
            <textarea
              key={index} // Always add a key when rendering lists
              placeholder="Project Tags"
              value={tag}
              onChange={(e) => handleTagChange(index, e.target.value)} // Pass index and new value
            />
          ))
        : ""}
      <div>
        <textarea
          placeholder="Add New Tag"
          value={newTag} // Bind to new tag state
          onChange={handleNewTagChange} // Handle changes for the new input
        />
        <button className="addButton" onClick={addNewTag}>
          Add
        </button>{" "}
      </div>
      {/* Button to add new tag */}
      <button className="saveButton" onClick={save}>
        Save
      </button>
    </div>
  );
}

export default Step4;
