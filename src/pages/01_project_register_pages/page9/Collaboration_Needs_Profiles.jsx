import React from "react";

const Collaboration_Needs_Profiles = () => {
  const [skillsRequired, setSkillsRequired] = useState([]);
  const [roles_Responsibilities, setRolesResponsibilities] = useState({});
  const [desiredProfile, setDesiredProfile] = useState("");
  const [selectionCriteria, setSelectionCriteria] = useState([]);
  return (
    <div>
      <h1>Collaboration_Needs_Profiles</h1>
      <input
        type="text"
        value={skillsRequired}
        onChange={(e) => {
          setSkillsRequired(e.target.value);
        }}
      />
      <input
        type="text"
        value={roles_Responsibilities}
        onChange={(e) => {
          setRolesResponsibilities(e.target.value);
        }}
      />
      <input
        type="text"
        value={desiredProfile}
        onChange={(e) => {
          setDesiredProfile(e.target.value);
        }}
      />
      <input
        type="text"
        value={selectionCriteria}
        onChange={(e) => {
          setSelectionCriteria(e.target.value);
        }}
      />
      <button>Save</button>
    </div>
  );
};

export default Collaboration_Needs_Profiles;
