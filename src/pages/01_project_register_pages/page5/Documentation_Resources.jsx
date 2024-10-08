import React from "react";

const Documentation_Resources = () => {
  const [projectDocumentation, setProjectDuration] = useState("");
  const [resources, setResources] = useState([]);
  return (
    <div>
      <h1>Documentation_Resources</h1>
      <input
        type="text"
        value={projectDocumentation}
        onChange={(e) => {
          setProjectDuration(e.target.value);
        }}
      />
      <input
        type="text"
        value={resources}
        onChange={(e) => {
          setResources(e.target.value);
        }}
      />
      <button>Save</button>
    </div>
  );
};

export default Documentation_Resources;
