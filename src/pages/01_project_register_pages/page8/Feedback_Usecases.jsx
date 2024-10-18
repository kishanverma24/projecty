import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Feedback_Usecases = () => {
  const [feedbackMechanism, setFeedbackMechanism] = useState("");
  const [communicationPlan, setCommunicationPlan] = useState("");
  const [example, setExample] = useState("");
  const [useCases, setUseCases] = useState([]);
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
      <h1>Feedback Usecases</h1>
      <input
        type="text"
        value={feedbackMechanism}
        onChange={(e) => {
          setFeedbackMechanism(e.target.value);
        }}
        placeholder="Feedback Mechanism"
      />
      <input
        type="text"
        value={communicationPlan}
        onChange={(e) => {
          setCommunicationPlan(e.target.value);
        }}
        placeholder="Communication Plan"
      />

      <input
        type="text"
        value={example}
        onChange={(e) => {
          setExample(e.target.value);
        }}
        placeholder="Project Examples"
      />

      <input
        type="text"
        value={useCases}
        onChange={(e) => {
          setUseCases(e.target.value);
        }}
        placeholder="Use Cases"
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

export default Feedback_Usecases;
