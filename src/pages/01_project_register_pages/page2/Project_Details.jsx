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
      <button>Save</button>
    </div>
  );
};

export default Project_Details;
