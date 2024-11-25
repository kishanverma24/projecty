import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useParams } from "react-router-dom";

const Profile = () => {
  const [searchUser, setSearchUser] = useState(null);
  const [searchUserProjects, setSearchUserProjects] = useState([]);
  const [error, setError] = useState(null);
  const { username } = useParams();

  // Fetch user details
  useEffect(() => {
    const fetchSearchedUser = async () => {
      try {
        const response = await fetch(
          // `http://localhost:8000/api/user/profile/${username}`,
          `https://serverprojecty.onrender.com/api/user/profile/${username}`,
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
          throw new Error(data.message || "User not found.");
        }
        setSearchUser(data.searchedUser);
        setError(null);
      } catch (error) {
        console.error("Error fetching user details:", error.message);
        setError(error.message);
      }
    };

    fetchSearchedUser();
  }, [username]);

  // Fetch user's projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          // `http://localhost:8000/api/project/projects/profileprojects/${username}`,
          `https://serverprojecty.onrender.com/api/project/projects/profileprojects/${username}`,
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
          throw new Error(data.message || "Failed to fetch projects.");
        }

        if (Array.isArray(data.projects)) {
          setSearchUserProjects(data.projects);
        } else {
          console.error("Unexpected data format for projects:", data);
        }
      } catch (error) {
        console.error("Error fetching projects:", error.message);
      }
    };

    fetchProjects();
  }, [username]);

  if (error) {
    return (
      <div>
        <Navbar />
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!searchUser) {
    return (
      <div>
        <Navbar />
        <p>User not found.</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div>
        <p>
          <strong>UserName:</strong> {searchUser.userName}
        </p>
        <p>
          <strong>Name:</strong> {searchUser.fullName}
        </p>
        <p>
          <strong>Email:</strong> {searchUser.email}
        </p>
        <p>
          <strong>Phone:</strong> {searchUser.phone || "N/A"}
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          {searchUser.linkedIn ? (
            <a
              href={searchUser.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {searchUser.linkedIn}
            </a>
          ) : (
            "N/A"
          )}
        </p>
        <p>
          <strong>Resume Link:</strong>{" "}
          {searchUser.resume ? (
            <a
              href={searchUser.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          ) : (
            "N/A"
          )}
        </p>
      </div>

      <hr />
      <div>
        <p>
          <strong>Projects</strong>
        </p>
        <div>
          {searchUserProjects.length > 0 ? (
            searchUserProjects.map((project) => (
              <div key={project._id}>
                <Link
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
                      alignContent: "center",
                      color: "black",
                    }}
                  >
                    {project.title}
                  </p>
                </Link>
              </div>
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
