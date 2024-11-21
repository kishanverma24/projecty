import React from "react";

const Project = () => {
  const savedData = localStorage.getItem("projectFormData");
  const Project = JSON.parse(savedData);
  const {
    title,
    overview,
    description,
    objective,
    scope,
    deliverables,
    milestones,
    technologies,
    systemRequirements,
    developmentStage,
    progress,
    skillsRequired,
    rolesAndResponsibilities,
    projectDuration,
    keyDates,
    primaryContact,
    communicationChannels,
    demoLink,
  } = Project;

  return (
    <div className="project">
        <h1>{title}</h1>
      <div>
        <h2>
          <u>1.Project Title and Overview</u>
        </h2>
        <h3>Title</h3>
        <p>{title}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
      </div>
      <div>
        <h2>
          <u>2.Problem Statement</u>
        </h2>
        <h3>Description</h3>
        <p>{description}</p>
        <h3>Objective</h3>
        <p>{objective}</p>
      </div>
      <div>
        <h2>
          <u>3.Project Scope</u>
        </h2>
        <p>{scope}</p>
      </div>
      <div>
        <h2>
          <u>4.Deliverables</u>
        </h2>
        <ul>
          {deliverables.map((deliverable, index) => (
            <li key={index}>{deliverable}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>
          <u>5.Milestones</u>
        </h2>
        <ul>
          {Object.keys(milestones).map((key, index) => (
            <li
              key={index}
              style={{ display: "flex", gap: "5px", alignItems: "center" }}
            >
              <p style={{ margin: 0 }}>
                <b>*{key}:</b>
              </p>
              <p style={{ margin: 0 }}>{milestones[key]}</p>{" "}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>
          <u>6.Technical Requirements</u>
        </h2>
        <ul>
          {Object.keys(technologies).map((technology, index) => (
            <li
              key={index}
              style={{ display: "flex", gap: "5px", alignItems: "center" }}
            >
              <p style={{ margin: 0 }}>
                <b>*{technology}:</b>
              </p>
              <p style={{ margin: 0 }}>{technologies[technology]}</p>{" "}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>
          <u>7.System Requirements</u>
        </h2>
        <ul>
          {Object.keys(systemRequirements).map((systemRequirement, index) => (
            <li
              key={index}
              style={{ display: "flex", gap: "5px", alignItems: "center" }}
            >
              <p style={{ margin: 0 }}>
                <b>*{systemRequirement}:</b>
              </p>
              <p style={{ margin: 0 }}>
                {systemRequirements[systemRequirement]}
              </p>{" "}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>
          <u>8.Current Status and Progress</u>
        </h2>
        <h3>Development Stage</h3>
        <p>{developmentStage}</p>
        <h3>Progress</h3>
        <ul>
          {progress.map((progres, index) => (
            <li key={index}>{progres}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>
          <u>9.Collaboration Needs</u>
        </h2>
        <h3>Skills Required</h3>
        <ul>
          {skillsRequired.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h3>Roles and Responsibilities</h3>
        <ul>
          {Object.keys(rolesAndResponsibilities).map((rR, index) => (
            <li
              key={index}
              style={{ display: "flex", gap: "5px", alignItems: "center" }}
            >
              <p style={{ margin: 0 }}>
                <b>*{rR}:</b>
              </p>
              <p style={{ margin: 0 }}>{rolesAndResponsibilities[rR]}</p>{" "}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>
          <u>10.Timeline</u>
        </h2>
        <h3>Project Duration</h3>
        <p>{projectDuration}</p>
        <h3>Key Dates</h3>
        <ul>
          {Object.keys(keyDates).map((keyDate, index) => (
            <li
              key={index}
              style={{ display: "flex", gap: "5px", alignItems: "center" }}
            >
              <p style={{ margin: 0 }}>
                <b>*{keyDate}:</b>
              </p>
              <p style={{ margin: 0 }}>{keyDates[keyDate]}</p>{" "}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>
          <u>11.Contact Information and Communication Plan</u>
        </h2>
        <h3>Primary Contact</h3>
        <p>
          <b>Name:</b> {primaryContact.name}
        </p>
        <p>
          <b>Role:</b> {primaryContact.role}
        </p>
        <p>
          <b>Contact:</b> {primaryContact.contact}
        </p>
        <h3>Communication Channels</h3>
        <ul>
          {Object.keys(communicationChannels).map(
            (communicationChannel, index) => (
              <li
                key={index}
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <p style={{ margin: 0 }}>
                  <b>*{communicationChannel.toUpperCase()}:</b>
                </p>
                <p style={{ margin: 0 }}>
                  {communicationChannels[communicationChannel]}
                </p>{" "}
              </li>
            )
          )}
        </ul>
        <h3>Visual Demo</h3>

        <a href="">{demoLink}</a>
      </div>
    </div>
  );
};

export default Project;
