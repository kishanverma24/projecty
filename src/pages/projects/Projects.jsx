import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../../components/Navbar";
import { ProjectsContext } from "../../context/ProjectsContext";

const Projects = () => {
  const { projects } = useContext(ProjectsContext); // Access projects from context

  return (
    <>
      <Navbar />
      <div>
        {projects.map((project, index) => (
          <div key={project._id || index}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/project/${project._id || project.id}`}
            >
              <div
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  height: "30px",
                  width: "100%",
                  cursor: "pointer",
                  borderRadius: "2px",
                  paddingLeft: "5px",
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                }}
              >
                {project.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
