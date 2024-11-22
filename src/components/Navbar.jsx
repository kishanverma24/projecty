import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar_div">
        <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
          <p>
            <b>PRoJEcTy</b>
          </p>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
          <p>
            <b>Home</b>
          </p>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/projects"}
        >
          <p>
            <b>Projects</b>
          </p>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={"/search"}>
          <p>
            <b>Search</b>
          </p>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/profile"}
        >
          <p>
            <b>Profile</b>
          </p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
