import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Technical_Requirments = () => {
  const [technologiesUsed, setTechnologiesUsed] = useState({});
  const [systemRequirments, setSystemRequirments] = useState({});
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
      <h1>Technical Requirments</h1>
      <input
        type="text"
        value={technologiesUsed}
        onChange={(e) => setTechnologiesUsed(e.target.value)}
      />

      <input
        type="text"
        value={systemRequirments}
        onChange={(e) => {
          setSystemRequirments(e.target.value);
        }}
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

export default Technical_Requirments;
