import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null); // State to manage the user
  const location = useLocation(); // Hook to get the current route

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser); // Update the state with the stored user
  }, []);

  // Function to check if the current path matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar_div">
      <Link
        style={{
          textDecoration: "none",
          color: "black",
        }}
        to={"/"}
      >
        <p>
          <b>PROJECTY</b>
        </p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: isActive("/") ? "blue" : "black", // Highlight current route
        }}
        to={"/"}
      >
        <p>
          <b>Home</b>
        </p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: isActive("/projects") ? "blue" : "black", // Highlight current route
        }}
        to={"/projects"}
      >
        <p>
          <b>Projects</b>
        </p>
      </Link>
      <Link
        style={{
          textDecoration: "none",
          color: isActive("/search") ? "blue" : "black", // Highlight current route
        }}
        to={"/search"}
      >
        <p>
          <b>Search</b>
        </p>
      </Link>
      {user && user !== "null" ? (
        <Link
          style={{
            textDecoration: "none",
            color: isActive("/profile") ? "blue" : "black", // Highlight current route
          }}
          to={"/profile"}
        >
          <p>
            <b>Profile</b>
          </p>
        </Link>
      ) : (
        <>
          <Link
            style={{
              textDecoration: "none",
              color: isActive("/login") ? "blue" : "black", // Highlight current route
            }}
            to={"/login"}
          >
            <p>
              <b>Login</b>
            </p>
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: isActive("/signup") ? "blue" : "black", // Highlight current route
            }}
            to={"/signup"}
          >
            <p>
              <b>Signup</b>
            </p>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;
