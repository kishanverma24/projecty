import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Budget_Funding = () => {
  const [budget, setBudget] = useState("");
  const [fundingStatus, setFundingStatus] = useState("");
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
      <h1>Budget Funding</h1>
      <input
        type="text"
        value={budget}
        onChange={(e) => {
          setBudget(e.target.value);
        }}
        placeholder="Budget"
      />
      <input
        type="text"
        value={fundingStatus}
        onChange={(e) => {
          setFundingStatus(e.target.value);
        }}
        placeholder="Funding Status"
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

export default Budget_Funding;
