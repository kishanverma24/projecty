import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { ProjectsContext } from "../../context/ProjectsContext";
import "./home.css";

const Home = () => {
  const { projects } = useContext(ProjectsContext); // Access projects from context

  // Function to filter projects by a specific tag
  const filterProjectsByTag = (tag) =>
    projects.filter((project) => project.tags.includes(tag));

  // Define categories to display on the home page
  const categories = [
    { title: "Machine Learning", tag: "Machine Learning" },
    { title: "Artificial Intelligence", tag: "Artificial Intelligence" },
    { title: "Data Science", tag: "Data Science" },
    { title: "Drones and Logistics", tag: "Drones" },
  ];

  return (
    <>
      <Navbar />
      <div>
        <div className="moto_Div">
          <h4>Welcome to Projecty Web App</h4>
          <p>Where you can list your Projects for Collaboration</p>
        </div>
      </div>
      {categories.map((category) => {
        const filteredProjects = filterProjectsByTag(category.tag); // Filter projects by category tag
        return (
          <div className="category_div" key={category.tag}>
            <h4 style={{ fontSize: "20px" }}>
              {category.title}{" "}
              <Link
                style={{ textDecoration: "none" }}
                to={`/projects?category=${category.tag}`}
              >
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: "normal",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  Show more
                </span>
              </Link>
            </h4>
            <div>
              {filteredProjects.length > 0 ? (
                filteredProjects.slice(0, 2).map((project) => (
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/project/${project._id}`}
                    key={project._id}
                  >
                    <p
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
                    </p>
                  </Link>
                ))
              ) : (
                <p>No projects found under this category.</p>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
