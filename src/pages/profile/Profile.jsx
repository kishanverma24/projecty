import React from "react";
import Navbar from "./../../components/Navbar";
import { Link } from "react-router-dom";
import { Examples } from "../../../Example";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div>
        <p>Name : Kishan Verma</p>
        <p>Email : kishanverma9151@gmail.com</p>
        <p>Phone : 9151634126</p>
        <p>LinkedIn: www.linkedin.com/in/kishan-verma-00478a310 </p>
        <Link
          to={"/projectr"}
          style={{
            textDecoration: "none",
          }}
        >
          <p
            style={{
              backgroundColor: "Red",
              color: "white",
              height: "30px",
              width: "20%",
              textAlign: "center",
              paddingTop: "5px",
              fontWeight: "bolder",
              borderRadius: "5px",
            }}
          >
            Add new Project
          </p>
        </Link>
      </div>
      <hr />
      <div>
        <p>Projects</p>
        {/* Dynamically map through the Eg array */}
        {Examples.map((exampleProject, index) => (
          <p key={index}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/project/${exampleProject.id}`}
            >
              <p
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  height: "30px",
                  width: "100%",
                  cursor: "pointer",
                  borderRadius: "2px",
                  paddingLeft: "5px",
                  alignContent: "center",
                  color: "black",
                }}
              >
                {exampleProject.title}
              </p>
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Profile;
