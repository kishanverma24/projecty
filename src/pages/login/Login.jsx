import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import Navbar from "../../components/Navbar";
import { LoginUserContext } from "../../context/LoginUserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { loginUser, logout, setLogin } = useContext(LoginUserContext);

  useEffect(() => {
    if (loginUser) {
      navigate("/");
    }
  }, [loginUser, navigate]);

  const handleLogin = async () => {
    if (!userName || !password) {
      setError("Please enter both username and password.");
      return;
    }
    try {
      const response = await fetch(
        // "http://localhost:8000/api/auth/login",
        "https://serverprojecty.onrender.com/api/auth/login",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName, password }),
        }
      );
      const data = await response.json();

      if (!data.success) {
        setError(data.message || "Invalid username or password.");
        setUserName("");
        setPassword("");
        return;
      }

      setLogin(data.user);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      setError(error.message || "An error occurred. Please try again later.");
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
