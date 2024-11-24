import React, { useContext, useEffect, useState } from "react";
import { ProjectsContext } from "../../context/ProjectsContext";

import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Project = () => {
  const { projects } = useContext(ProjectsContext);

  const { projectid } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProject = projects.find((project) => project._id === projectid);
    setProject(foundProject);

    setLoading(false);
  }, [projectid, projects]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!project) {
    return <div>Project not found.</div>;
  }

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
  } = project;
  return (
    <>
      <Navbar />
      <div className="project" style={{ margin: "10px" }}>
        <div
          style={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              // backgroundColor: "darkred",
              padding: "3px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            {title}
          </h1>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={`/search/profile/${project.userName}`}
          >
            <p
              style={{
                marginTop: "38px",
                backgroundColor: "darkred",
                cursor: "pointer",
              }}
            >
              <b>by Kishan Verma</b>
            </p>
          </Link>
        </div>
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
                  <b>{technology}:</b>
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
                  <b>{systemRequirement}:</b>
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
                  <b>{rR}:</b>
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
                  <b>{keyDate}:</b>
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
                    <b>{communicationChannel}:</b>
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
    </>
  );
};

export default Project;
