import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Create the context
export const LoginUserContext = createContext();

// Create the provider component
export const LoginUserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);
  const navigate = useNavigate();

  // Fetch user from localStorage on mount
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoginUser(JSON.parse(user));
    }
  }, []);


  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    setLoginUser(null);
    navigate("/login");
  };

  return (
    <LoginUserContext.Provider value={{ loginUser, logout }}>
      {children}
    </LoginUserContext.Provider>
  );
};
