import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state for the button
  const navigate = useNavigate();

  const handleSignUp = async () => {
    // Clear previous messages
    setError(null);
    setSuccess(null);
    setLoading(true);

    // Validation
    if (!userName || !fullName || !email || !password) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/user/register", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          fullName,
          email,
          password,
        }),
      });
      const data = await response.json();

      if (!data.success) {
        setError(data.message || "An error occurred. Please try again.");
        setLoading(false);
        return;
      }

      // Success feedback
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="signUp_div">
        <h1>Welcome to Projecty's Sign Up Page</h1>
        <div className="subSignUp_div">
          {success && <p className="success-message">{success}</p>}
          <p>Username</p>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            aria-label="Username"
          />
          <p>Full Name</p>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            aria-label="Full Name"
          />
          <p>Email</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
          />
          <button onClick={handleSignUp} disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default SignUp;
