import React, { useEffect, useState } from "react";
import Navbar from "./../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Examples } from "../../../Example";

const Profile = () => {
  const [loginUser, setLoginUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user && user !== "null") {
      setLoginUser(JSON.parse(user));
    } else {
      navigate("/login"); // Redirect to login if user is not found
    }
  }, [navigate]);

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
        localStorage.removeItem("user");
        navigate("/");
      }
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  if (!loginUser) {
    return <p>Loading...</p>; // Show a loading state while user data is being fetched
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
          <strong>Phone:</strong> {loginUser.phone || "N/A"}
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
            cursor:"pointer"
          }}
          className="add-project-btn"
        >
          Add new Project
        </Link>
        <button
          style={{
            backgroundColor: "red",
            color: "black",
            height: "30px",
            width: "10%",
            cursor:"pointer"
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
      </div>
    </div>
  );
};

export default Profile;
