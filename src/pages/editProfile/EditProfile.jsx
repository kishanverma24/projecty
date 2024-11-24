import React, { useState, useEffect, useContext } from "react";
import "./editprofile.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { LoginUserContext } from "../../context/LoginUserContext";

const EditProfile = () => {
  const [fullName, setFullName] = useState("");
  const [resume, setResume] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const { loginUser, logout, setLogin } = useContext(LoginUserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (loginUser) {
      setFullName(loginUser?.fullName || "");
      setResume(loginUser?.resume || "");
      setLinkedIn(loginUser?.linkedIn || "");
    }
  }, []);

  const handleUpdate = async () => {
    setError(null);
    setSuccess(null);
    setLoading(true);

    if (
      fullName.trim() === "" ||
      resume.trim() === "" ||
      linkedIn.trim() === ""
    ) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    if (!loginUser) {
      setError("User not found.");
      setLoading(false);
      return;
    }

    try {
      const updatedUser = { fullName, resume, linkedIn };
      const response = await fetch(
        `http://localhost:8000/api/user/${loginUser._id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      const data = await response.json();
      console.log(data);

      if (!data.message == "User updated successfully") {
        setError(data.message || "Failed to update profile.");
        setLoading(false);
        return;
      }

      if (data.message == "User updated successfully") {
        // console.log(data.currentUser);

        setLogin(data.currentUser); // Update loginUser context
        setSuccess("Profile updated successfully!");
        setLoading(false);
        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="signUp_div">
        <h1>Welcome to Projecty's Edit Profile Page</h1>
        <div className="subSignUp_div">
          {success && <p className="success-message">{success}</p>}
          <p>Resume</p>
          <input
            type="text"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
          />
          <p>Full Name</p>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <p>LinkedIn</p>
          <input
            type="text"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
          />
          <button onClick={handleUpdate} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          {error && <p className="error-message">{`Kverror, ${error}`}</p>}
        </div>
      </div>
    </>
  );
};

export default EditProfile;
