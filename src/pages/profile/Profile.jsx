import React, { useContext, useEffect, useState } from "react";
import Navbar from "./../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { LoginUserContext } from "../../context/LoginUserContext";

const Profile = () => {
  const [loginUserProjects, setLoginUserProjects] = useState([]);
  const navigate = useNavigate();
  const { loginUser, logout, setLogin } = useContext(LoginUserContext);

  useEffect(() => {
    if (!(loginUser && loginUser !== "null")) {
      navigate("/login");
    }
  }, [loginUser, navigate]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/project/projects/profileprojects/${loginUser.userName}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        if (!data.success) {
          throw new Error(data.message || `Failed to fetch projects`);
        }

        if (Array.isArray(data.projects)) {
          setLoginUserProjects(data.projects);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error.message);
      }
    };

    fetchProjects();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data.success) {
        logout();
        navigate("/");
      } else {
        console.error("Logout failed:", data.message);
      }
    } catch (error) {
      console.error("Logout failed: ", error.message);
    }
  };

  if (!loginUser) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <div>
        <p>
          <strong>UserName:</strong> {loginUser.userName}
        </p>
        <p>
          <strong>Name:</strong> {loginUser.fullName}
        </p>
        <p>
          <strong>Email:</strong> {loginUser.email}
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          {loginUser.linkedIn ? (
            <a
              href={loginUser.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {loginUser.linkedIn}
            </a>
          ) : (
            "N/A"
          )}
        </p>
        <p>
          <strong>Resume Link:</strong>{" "}
          {loginUser.resume ? (
            <a
              href={loginUser.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          ) : (
            "N/A"
          )}
        </p>
        <Link
          to="/projectr"
          style={{
            backgroundColor: "darkgreen",
            textDecoration: "none",
            color: "white",
            padding: "5px",
            borderRadius: "2px",
            marginRight: "20px",
            cursor: "pointer",
          }}
          className="add-project-btn"
        >
          Add new Project
        </Link>
        <Link
          to="/editprofile"
          style={{
            backgroundColor: "darkblue",
            textDecoration: "none",
            color: "white",
            padding: "5px",
            borderRadius: "2px",
            marginRight: "20px",
            cursor: "pointer",
          }}
          className="add-project-btn"
        >
          Edit Profile
        </Link>
        <button
          style={{
            backgroundColor: "red",
            color: "black",
            height: "30px",
            width: "10%",
            cursor: "pointer",
          }}
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <hr />
      <div>
        <p>
          <strong>Projects</strong>
        </p>
        <div>
          {loginUserProjects.length > 0 ? (
            loginUserProjects.map((project, index) => (
              <Link
                key={index}
                style={{ textDecoration: "none" }}
                to={`/project/${project._id}`}
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
            <p>No projects found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
