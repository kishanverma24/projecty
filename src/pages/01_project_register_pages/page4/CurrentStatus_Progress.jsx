import React from "react";

const CurrentStatus_Progress = () => {
  const [delvelopmentStage, setDevelopmentStage] = useState();
  const [progress, setProgress] = useState();
  const [projectDuration, setProjectDuration] = useState();
  const [keyDates, setKeyDates] = useState();
  return (
    <div>
      <h1>CurrentStatus_Progress</h1>
      <input
        type="text"
        value={delvelopmentStage}
        onChange={(e) => {
          setDevelopmentStage(e.target.value);
        }}
      />
      <input
        type="text"
        value={progress}
        onChange={(e) => {
          setProgress(e.target.value);
        }}
      />
      <input
        type="text"
        value={projectDuration}
        onChange={(e) => {
          setProjectDuration(e.target.value);
        }}
      />
      <input
        type="text"
        value={keyDates}
        onChange={(e) => {
          setKeyDates(e.target.value);
        }}
      />
      <button>Save</button>
    </div>
  );
};

export default CurrentStatus_Progress;
