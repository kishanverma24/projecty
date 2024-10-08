import React from "react";

const Budget_Funding = () => {
  const [budget, setBudget] = useState("");
  const [fundingStatue, setFundingStatue] = useState("");
  return (
    <div>
      <h1>Budget_Funding</h1>
      <input
        type="text"
        value={budget}
        onChange={(e) => {
          setBudget(e.target.value);
        }}
      />
      <input
        type="text"
        value={fundingStatue}
        onChange={(e) => {
          setFundingStatue(e.target.value);
        }}
      />
      <button>Save</button>
    </div>
  );
};

export default Budget_Funding;
