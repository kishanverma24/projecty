import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CurrentStatus_Progress = () => {
  const [delvelopmentStage, setDevelopmentStage] = useState();
  const [progress, setProgress] = useState();
  const [projectDuration, setProjectDuration] = useState();
  const [keyDates, setKeyDates] = useState();
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
      <h1>CurrentStatus Progress</h1>
      <input
        type="text"
        value={delvelopmentStage}
        onChange={(e) => {
          setDevelopmentStage(e.target.value);
        }}
        placeholder="Development Stage"
      />
      <input
        type="text"
        value={progress}
        onChange={(e) => {
          setProgress(e.target.value);
        }}
        placeholder="Progress"
      />
      <input
        type="text"
        value={projectDuration}
        onChange={(e) => {
          setProjectDuration(e.target.value);
        }}
        placeholder="Project Duration"
      />
      <input
        type="text"
        value={keyDates}
        onChange={(e) => {
          setKeyDates(e.target.value);
        }}
        placeholder="Key Dates"
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

export default CurrentStatus_Progress;
