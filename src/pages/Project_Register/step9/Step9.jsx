// StepX.js (Merged Roles and Responsibilities with Skills Required)
import React, { useState, useEffect } from "react";
import "./step9.css";

function Step9({ formData, updateFormData }) {
  // Initialize state for roles and responsibilities
  const [rolesAndResponsibilities, setRolesAndResponsibilities] = useState(
    typeof formData.rolesAndResponsibilities === "object" &&
      formData.rolesAndResponsibilities !== null
      ? formData.rolesAndResponsibilities
      : {}
  );
  // Initialize state for skills required (can be extended as per requirements)
  const [skillsRequired, setSkillsRequired] = useState(
    Array.isArray(formData.skillsRequired) ? formData.skillsRequired : []
  );
  // States for new role and responsibility
  const [newRole, setNewRole] = useState("");
  const [newResponsibility, setNewResponsibility] = useState("");
  // State for new skill required
  const [newSkill, setNewSkill] = useState("");

  // UseEffect hook to update form data when either roles/responsibilities or skills changes
  // useEffect(() => {
  //   updateFormData({ rolesAndResponsibilities, skillsRequired });
  // }, [rolesAndResponsibilities, skillsRequired, updateFormData]);

  // Handle saving of data
  const save = () => {
    updateFormData({ rolesAndResponsibilities, skillsRequired });
  };

  // Handle the change in responsibilities for existing roles
  // const handleResponsibilityKeyChange = (oldRole, newRole) => {
  //   if (newKey === oldKey || !newKey.trim()) return; // Avoid empty or same key

  //   setRolesAndResponsibilities((prevRoles) => ({
  //     ...prevRoles,
  //     [role]: value, // Update responsibility for the specific role
  //   }));
  // };
// ---------------------
const handleResponsibilityKeyChange = (oldRole, newRole) => {
  if (newRole === oldRole || !newRole.trim()) return; // Avoid empty or same key

  setSystemRequirements((prevRoles) => {
    const { [oldRole]: _, ...rest } = prevRoles; // Remove old key
    return {
      ...rest,
      [newRole]: prevSystemRequirements[oldRole], // Add new key with the old value
    };
  });
};


  // ----------
  const handleResponsibilityChange = (role, value) => {
    setRolesAndResponsibilities((prevRoles) => ({
      ...prevRoles,
      [role]: value, // Update responsibility for the specific role
    }));
  };

  // Handle new role and responsibility changes
  const handleNewRoleChange = (e) => setNewRole(e.target.value);
  const handleNewResponsibilityChange = (e) =>
    setNewResponsibility(e.target.value);

  // Add new role and responsibility to the object
  const addNewRole = () => {
    if (newRole.trim() === "" || newResponsibility.trim() === "") return;
    setRolesAndResponsibilities((prevRoles) => ({
      ...prevRoles,
      [newRole]: newResponsibility, // Add new role-responsibility pair
    }));
    setNewRole(""); // Clear the role input field
    setNewResponsibility(""); // Clear the responsibility input field
  };

  // Add a new skill to the skills array
  const addNewSkill = () => {
    if (newSkill.trim() === "") return;
    setSkillsRequired((prevSkills) => [...prevSkills, newSkill]);
    setNewSkill(""); // Clear the skill input field
  };

  return (
    <div className="collaboration_div">
      <h2>Step 9: Collaboration Needs</h2>
      {/* Skills Required Section */}
      <h3>Skills Required</h3>
      {skillsRequired.length !== 0
        ? skillsRequired.map((skill, index) => (
            <div key={index}>
              <textarea
                placeholder="Skill"
                value={skill}
                onChange={(e) => {
                  const newSkills = [...skillsRequired];
                  newSkills[index] = e.target.value;
                  setSkillsRequired(newSkills); // Update specific skill
                }}
              />
            </div>
          ))
        : ""}

      {/* New Skill Input */}
      <div>
        <input
          type="text"
          placeholder="New Skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)} // Handle changes for new skill input
        />
        <button className="addButton" onClick={addNewSkill}>Add Skill</button>
      </div>
      {/* Roles and Responsibilities Section */}
      <h3>Roles and Responsibilities</h3>
      {Object.keys(rolesAndResponsibilities).length !== 0
        ? Object.keys(rolesAndResponsibilities).map((role) => (
            <div className="subRole_div" key={role}>
              <textarea
                placeholder="Role"
                value={role}
                onChange={
                  (e) => handleResponsibilityKeyChange(role, e.target.value) // Handle role change
                }
              />
              <textarea
                placeholder="Responsibility"
                value={rolesAndResponsibilities[role]}
                onChange={
                  (e) => handleResponsibilityChange(role, e.target.value) // Handle responsibility change
                }
              />
            </div>
          ))
        : ""}

      {/* New Role and Responsibility Input */}
      <div className="subRole_div">
        <input
          type="text"
          placeholder="Role"
          value={newRole}
          onChange={handleNewRoleChange} // Handle changes for the new role input
        />
        <textarea
          placeholder="Responsibility"
          value={newResponsibility}
          onChange={handleNewResponsibilityChange} // Handle changes for the new responsibility input
        />
        <button className="addButton" onClick={addNewRole}>Add Role</button>
      </div>

      <button className="saveButton" onClick={save}>Save</button>
    </div>
  );
}

export default Step9;
