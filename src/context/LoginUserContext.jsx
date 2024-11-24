import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginUserContext = createContext();

export const LoginUserProvider = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoginUser(JSON.parse(user));
    }
  }, []);

  const setLogin = (userr) => {
    localStorage.setItem("user", JSON.stringify(userr));
    setLoginUser(userr);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setLoginUser(null);
  };

  return (
    <LoginUserContext.Provider value={{ loginUser, logout, setLogin }}>
      {children}
    </LoginUserContext.Provider>
  );
};
