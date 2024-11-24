import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Navbar from "../../components/Navbar";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State for error messages
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/"); // Redirect logged-in users to home
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (!userName || !password) {
      setError("Please enter both username and password.");
      return;
    }
    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });
      const data = await response.json();

      if (!data.success) {
        setError("Invalid username or password.");
        setUserName("");
        setPassword("");
        return;
      }
      // console.log(data.user);

      // Store only necessary data
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="login_div">
        <h1>Welcome to Projecty's Login Page</h1>
        <div className="sublogin_div">
          <p>Please enter your User Name</p>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="UserName"
            aria-label="User Name"
          />
          <p>Please enter your Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            aria-label="Password"
          />
          <button onClick={handleLogin}>Submit</button>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </>
  );
};

export default Login;
