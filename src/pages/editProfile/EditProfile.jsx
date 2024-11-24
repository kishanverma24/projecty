import React, { useState, useEffect } from "react";
import "./editprofile.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const EditProfile = () => {
  const [fullName, setFullName] = useState("");
  const [resume, setResume] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Get user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setFullName(user?.fullName || ""); // Default to empty if not found
      setResume(user?.resume || "");
      setLinkedIn(user?.linkedIn || "");
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

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      setError("User not found in local storage.");
      setLoading(false);
      return;
    }

    const user = JSON.parse(storedUser);

    try {
      const updatedUser = { fullName, resume, linkedIn };
      const response = await fetch(
        `http://localhost:8000/api/user/${user._id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      if (!response.success) {
        const errorData = await response.json();
        setError(errorData.message || "Failed to update profile.");
        setLoading(false);
        return;
      }

      const data = await response.json();
      console.log("API response:", data);

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.currentUser || user));
        setSuccess("Profile updated successfully!");
        
        // Add delay for localStorage update to reflect
      } else {
        setError(data.message || "An error occurred.");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
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
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default EditProfile;
