import React, { useState } from "react";
import "./pro_reg.css";
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
import Navbar from "./../../components/Navbar";

function MainForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("newProjectFormData");
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
          timeline: "",
        };
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const updateFormData = (newData) => {
    const updatedData = { ...formData, ...newData };
    setFormData(updatedData);
    localStorage.setItem("newProjectFormData", JSON.stringify(updatedData));
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 12));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/projects", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!data.success) {
        setError(data.message || "An error occurred. Please try again.");
        setLoading(false);
        return;
      }

      localStorage.removeItem("newProjectFormData");
      setSuccess("Project successfully submitted! Redirecting...");
      setTimeout(() => {
        window.location.href = "/profile";
      }, 2000);
    } catch (err) {
      console.error("Submission error:", err);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    localStorage.removeItem("newProjectFormData");
    setFormData({
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
      timeline: "",
    });
    setCurrentStep(1);
  };

  const renderStep = () => {
    const StepComponents = [
      Step1,
      Step2,
      Step3,
      Step4,
      Step5,
      Step6,
      Step7,
      Step8,
      Step9,
      Step10,
      Step11,
      Step12,
    ];
    const StepComponent = StepComponents[currentStep - 1];
    return (
      <StepComponent formData={formData} updateFormData={updateFormData} />
    );
  };

  return (
    <>
      <Navbar />
      <div className="pro_reg_page">
        <h3 className="main-h1">Project Registration Form</h3>
        {loading && <p>Submitting...</p>}
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        {renderStep()}

        <div>
          {currentStep === 1 && (
            <button className="back-button" onClick={clearForm}>
              Clear Form
            </button>
          )}
          {currentStep > 1 && (
            <button className="back-button" onClick={prevStep}>
              Back
            </button>
          )}
          {currentStep < 12 ? (
            <button className="next-button" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button
              className="next-button"
              onClick={handleSubmit}
              disabled={loading}
            >
              Submit Project
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default MainForm;
