import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Collaboration_Needs_Profiles = () => {
  const [skillsRequired, setSkillsRequired] = useState([]);
  const [roles_Responsibilities, setRolesResponsibilities] = useState({});
  const [desiredProfile, setDesiredProfile] = useState("");
  const [selectionCriteria, setSelectionCriteria] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigation = () => {
    console.log("Hello G");
  };
  const handleSave = (e) => {
    // e.preventDefault();
  };
  return (
    <div className="div1">
      <h1>Collaborator's Profiles</h1>
      <input
        type="text"
        value={skillsRequired}
        onChange={(e) => {
          setSkillsRequired(e.target.value);
        }}
        placeholder="Skills Required"
      />
      <input
        type="text"
        value={roles_Responsibilities}
        onChange={(e) => {
          setRolesResponsibilities(e.target.value);
        }}
        placeholder="Roles Responsibilities"
      />
      <input
        type="text"
        value={desiredProfile}
        onChange={(e) => {
          setDesiredProfile(e.target.value);
        }}
        placeholder="Desired Profile"
      />
      <input
        type="text"
        value={selectionCriteria}
        onChange={(e) => {
          setSelectionCriteria(e.target.value);
        }}
        placeholder="Selection Criteria"
      />
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <button
          className="bp1"
          onClick={handleSave}
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            height: "50ox",
            width: "60px",
          }}
        >
          Save
        </button>
        <button
          className="bp1"
          onClick={handleNavigation}
          style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            height: "50ox",
            width: "60px",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Collaboration_Needs_Profiles;
