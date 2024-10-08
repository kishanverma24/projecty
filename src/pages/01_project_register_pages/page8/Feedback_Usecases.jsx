import React from "react";

const Feedback_Usecases = () => {
  const [feedbackMechanism, setFeedbackMechanism] = useState("");
  const [communicationPlan, setCommunicationPlan] = useState("");
  const [example, setExample] = useState("");
  const [useCases, setUseCases] = useState([]);
  return (
    <div>
      <h1>Feedback_Usecases</h1>
      <input
        type="text"
        value={feedbackMechanism}
        onChange={(e) => {
          setFeedbackMechanism(e.target.value);
        }}
      />
      <input
        type="text"
        value={communicationPlan}
        onChange={(e) => {
          setCommunicationPlan(e.target.value);
        }}
      />

      <input
        type="text"
        value={example}
        onChange={(e) => {
          setExample(e.target.value);
        }}
      />

      <input
        type="text"
        value={useCases}
        onChange={(e) => {
          setUseCases(e.target.value);
        }}
      />
      <button>Save</button>
    </div>
  );
};

export default Feedback_Usecases;
