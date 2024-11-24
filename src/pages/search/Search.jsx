import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./../../components/Navbar";
import { ProjectsContext } from "../../context/ProjectsContext";

const Search = () => {
  const { projects } = useContext(ProjectsContext); // Access projects from context
  const [searchedProjects, setSearchedProjects] = useState([]); // List of matching projects
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input) {
      const results = projects.filter((project) =>
        project.title.toLowerCase().includes(input.toLowerCase())
      );
      setSearchedProjects(results);
    } else {
      setSearchedProjects([]);
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          margin: "10px",
          gap: "2px",
        }}
      >
        <input
          style={{ width: "50%", height: "20px" }}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          style={{ height: "25px", cursor: "pointer" }}
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div>
        {searchedProjects.length > 0 ? (
          searchedProjects.map((project, index) => (
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
          ))
        ) : (
          projects.map((project, index) => (
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
          ))
        )}
      </div>
    </>
  );
};

export default Search;
