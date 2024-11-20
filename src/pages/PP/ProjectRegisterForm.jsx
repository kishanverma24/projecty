import React, { useState, useEffect } from "react";
// import axios from "axios";
import Step1 from "./step1/Step1";
import Step2 from "./step2/Step2";
import Step3 from "./step3/Step3";
import Step4 from "./step4/Step4";
import Step5 from "./step5/Step5";
import Step6 from "./step6/Step6";
import Step7 from "./step7/Step7";
import Step8 from "./step8/Step8";
import Step9 from "./step9/Step9";
import Step10 from "./step10/Step10";
import Step11 from "./step11/Step11";
import Step12 from "./step12/Step12";

function MainForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("projectFormData");
    return savedData
      ? JSON.parse(savedData)
      : {
          title: "",
          overview: "",
          description: "",
          objective: "",
          scope: "",
          deliverables: "",
          milestones: "",
          technologies: "",
          systemRequirements: "",
          progress: "",
          collaborationNeeds: "",
          timeline: "",
          budget: "",
          fundingStatus: "",
          contactInfo: "",
          communicationPlan: "",
        };
  });

  const updateFormData = (newData) => {
    const updatedData = { ...formData, ...newData };
    setFormData(updatedData);
    localStorage.setItem("projectFormData", JSON.stringify(updatedData));
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // const handleSubmit = () => {
  //   axios.post('http://localhost:5000/api/projects', formData)
  //     .then(response => {
  //       console.log('Project saved:', response.data);
  //       localStorage.removeItem('projectFormData'); // Clear localStorage after submission
  //       alert('Project successfully submitted!');
  //     })
  //     .catch(error => console.error('Error saving project:', error));
  // };
  const handleSubmit = () => {
    console.log("Hello G");
  };
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <Step2 formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <Step3 formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <Step4 formData={formData} updateFormData={updateFormData} />;
      case 5:
        return <Step5 formData={formData} updateFormData={updateFormData} />;
      case 6:
        return <Step6 formData={formData} updateFormData={updateFormData} />;
      case 7:
        return <Step7 formData={formData} updateFormData={updateFormData} />;
      case 8:
        return <Step8 formData={formData} updateFormData={updateFormData} />;
      case 9:
        return <Step9 formData={formData} updateFormData={updateFormData} />;
      case 10:
        return <Step10 formData={formData} updateFormData={updateFormData} />;
      case 11:
        return <Step11 formData={formData} updateFormData={updateFormData} />;
      case 12:
        return <Step12 formData={formData} updateFormData={updateFormData} />;
      default:
        return <Step1 formData={formData} updateFormData={updateFormData} />;
    }
  };

  return (
    <div>
      <h1>Project Form</h1>
      {renderStep()}
      <div>
        {currentStep > 1 && <button onClick={prevStep}>Back</button>}
        {currentStep < 12 ? (
          <button onClick={nextStep}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit Project</button>
        )}
      </div>
    </div>
  );
}

export default MainForm;
