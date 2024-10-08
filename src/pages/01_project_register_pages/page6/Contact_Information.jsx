import React from "react";

const Contact_Information = () => {
  const [primaryContact, setPrimaryContact] = useState("");
  const [preferredCommunicationChannels, setPreferredCommunicationChannels] =
    useState({});
  return (
    <div>
      <h1>Contact_Information</h1>
      <input
        type="text"
        value={primaryContact}
        onChange={(e) => {
          setPrimaryContact(e.target.value);
        }}
      />
      <input
        type="text"
        value={preferredCommunicationChannels}
        onChange={(e) => {
          setPreferredCommunicationChannels(e.target.value);
        }}
      />
      <button>Save</button>
    </div>
  );
};

export default Contact_Information;
