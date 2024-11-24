import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create the context
export const LoginUserContext = createContext();

// Create the provider component
export const LoginUserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch user from localStorage on mount
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoginUser(JSON.parse(user));
    }
  }, []);

  // Login function
  const login = async (userName, password) => {
    if (!userName || !password) {
      setError("Please enter both username and password.");
      return false;
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
        return false;
      }

      // Store user data in localStorage and context
      localStorage.setItem("user", JSON.stringify(data.user));
      setLoginUser(data.user);
      setError(null); // Clear any previous error
      navigate("/");
      return true;
    } catch (err) {
      console.error("Login failed:", err.message);
      setError("An error occurred. Please try again later.");
      return false;
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    setLoginUser(null);
    navigate("/login");
  };

  return (
    <LoginUserContext.Provider value={{ loginUser, login, logout }}>
      {children}
    </LoginUserContext.Provider>
  );
};
