// Project Details
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Project_Details = () => {
  // const [, set] = useState()
  const [scope, setScope] = useState("");
  const [deliverables, setDeliverables] = useState([]);
  const [milestones, setMilestones] = useState({});
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
      <h1>Project Details</h1>
      <input
        type="text"
        placeholder="Scope"
        value={scope}
        onChange={(e) => setScope(e.target.value)}
      />
      <input
        type="text"
        placeholder="Deliverables"
        value={deliverables}
        onChange={(e) => setDeliverables(e.target.value)}
      />
      <input
        type="text"
        placeholder="Scope"
        value={milestones}
        onChange={(e) => setMilestones(e.target.value)}
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

export default Project_Details;
