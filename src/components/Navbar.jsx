import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null); // State to manage the user

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser); // Update the state with the stored user
  }, []);

  return (
    <div className="navbar_div">
      <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
        <p>
          <b>PROJECTY</b>
        </p>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
        <p>
          <b>Home</b>
        </p>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to={"/projects"}>
        <p>
          <b>Projects</b>
        </p>
      </Link>
      <Link style={{ textDecoration: "none", color: "black" }} to={"/search"}>
        <p>
          <b>Search</b>
        </p>
      </Link>
      {user && user !== "null" ? (
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/profile"}
        >
          <p>
            <b>Profile</b>
          </p>
        </Link>
      ) : (
        <>
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={"/login"}
          >
            <p>
              <b>Login</b>
            </p>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black" }}
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
