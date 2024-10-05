// Project Details
import React, { useState } from "react";
const Project_Details = () => {
  // const [, set] = useState()
  const [scope, setScope] = useState("");
  const [deliverables, setDeliverables] = useState([]);
  const [milestones, setMilestones] = useState({});
  return (
    <div>
      <h1>Project_Details</h1>
      <input
        type="text"
        placeholder="Scope"
        value={scope}
        onChange={(e) => setScope(e.target.value)}
      />
      (deliverables == )
    </div>
  );
};

export default Project_Details;
