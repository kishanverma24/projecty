import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Documentation_Resources = () => {
  const [projectDocumentation, setProjectDuration] = useState("");
  const [resources, setResources] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const handleNavigation = () => {
    const currentPageMatch = location.pathname.match(/\/page(\d+)/);
    if (currentPageMatch) {
      const currentPageNumber = parseInt(currentPageMatch[1]);
      const nextPageNumber = currentPageNumber + 1;
      navigate(`/page${nextPageNumber}`);
    }
  };
  const handleSave = (e) => {
    // e.preventDefault();
  };
  return (
    <div className="div1">
      <h1>Documentation Resources</h1>
      <input
        type="text"
        value={projectDocumentation}
        onChange={(e) => {
          setProjectDuration(e.target.value);
        }}
        placeholder="Project Documentation Link"
      />
      <input
        type="text"
        value={resources}
        onChange={(e) => {
          setResources(e.target.value);
        }}
        placeholder="Resources"
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

export default Documentation_Resources;
