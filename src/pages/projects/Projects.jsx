import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./../../components/Navbar";
import { Examples } from "../../../Example.js";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* Dynamically map through the Eg array */}
        {Examples.map((exampleProject, index) => (
          <p key={index}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/project/${exampleProject.id}`}
            >
              <p
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  height: "30px",
                  width: "100%",
                  cursor: "pointer",
                  borderRadius: "2px",
                  paddingLeft: "5px",
                  alignContent: "center",
                  color: "black",
                }}
              >
                {exampleProject.title}
              </p>
            </Link>
          </p>
        ))}
      </div>
    </>
  );
};

export default Projects;
