import React from "react";
import Navbar from "../../components/Navbar";
import "./home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="moto_Div">
          <h4>Welcome to Projecty Web App </h4>
          <p>where you can list your Projects for Collaboration </p>
        </div>
      </div>
      <div className="machineLearning_div">
        <h4 style={{fontSize:"20px"}}>
          Machine Learning{" "}
          <Link style={{textDecoration:"none"}} to={"/projects"}>
          <span
            style={{
              fontSize: "10px",
              fontWeight: "normal",
              color: "blue",
              cursor: "pointer",
            }}
          >
            Show more
          </span>
          </Link>
        </h4>
        <div>
          <Link style={{textDecoration:"none"}} to={"/project"}>
          <p
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              height: "30px",
              width: "100%",
              cursor: "pointer",
              borderRadius: "2px",
              paddingLeft: "5px",
              alignContent: "center",
              color:"black"
            }}
          >
            Smart Home Management System{" "}
          </p>
          </Link>
          <Link style={{textDecoration:"none"}} to={"/project"}>
          <p
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              height: "30px",
              width: "100%",
              cursor: "pointer",
              borderRadius: "2px",
              paddingLeft: "5px",
              alignContent: "center",
              color:"black"
            }}
          >
            Smart Home Management System{" "}
          </p>
          </Link>

         
        </div>
      </div>
      <div className="machineLearning_div">
        <h4 style={{fontSize:"20px"}}>
          Artificial Intelligence{" "}
          <Link style={{textDecoration:"none"}} to={"/projects"}>
          <span
            style={{
              fontSize: "10px",
              fontWeight: "normal",
              color: "blue",
              cursor: "pointer",
            }}
          >
            Show more
          </span>
          </Link>
        </h4>
        <div>
        <Link style={{textDecoration:"none"}} to={"/project"}>
          <p
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              height: "30px",
              width: "100%",
              cursor: "pointer",
              borderRadius: "2px",
              paddingLeft: "5px",
              alignContent: "center",
              color:"black"
            }}
          >
            Smart Home Management System{" "}
          </p>
          </Link>
          <Link style={{textDecoration:"none"}} to={"/project"}>
          <p
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              height: "30px",
              width: "100%",
              cursor: "pointer",
              borderRadius: "2px",
              paddingLeft: "5px",
              alignContent: "center",
              color:"black"
            }}
          >
            Smart Home Management System{" "}
          </p>
          </Link>
        </div>
      </div>
      <div className="machineLearning_div">
        <h4 style={{fontSize:"20px"}}>
          Data Science{" "}
          <Link style={{textDecoration:"none"}} to={"/projects"}>
          <span
            style={{
              fontSize: "10px",
              fontWeight: "normal",
              color: "blue",
              cursor: "pointer",
            }}
          >
            Show more
          </span>
          </Link>
        </h4>
        <div>
        <Link style={{textDecoration:"none"}} to={"/project"}>
          <p
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              height: "30px",
              width: "100%",
              cursor: "pointer",
              borderRadius: "2px",
              paddingLeft: "5px",
              alignContent: "center",
              color:"black"
            }}
          >
            Smart Home Management System{" "}
          </p>
          </Link>
          <Link style={{textDecoration:"none"}} to={"/project"}>
          <p
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              height: "30px",
              width: "100%",
              cursor: "pointer",
              borderRadius: "2px",
              paddingLeft: "5px",
              alignContent: "center",
              color:"black"
            }}
          >
            Smart Home Management System{" "}
          </p>
          </Link>
        </div>
      </div>
      <div className="machineLearning_div">
        <h4 style={{fontSize:"20px"}}>
          Electronics and Communication Engineering{" "}
          <Link style={{textDecoration:"none"}} to={"/projects"}>
          <span
            style={{
              fontSize: "10px",
              fontWeight: "normal",
              color: "blue",
              cursor: "pointer",
            }}
          >
            Show more
          </span>
          </Link>
        </h4>
        <div>
        <Link style={{textDecoration:"none"}} to={"/project"}>
          <p
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              height: "30px",
              width: "100%",
              cursor: "pointer",
              borderRadius: "2px",
              paddingLeft: "5px",
              alignContent: "center",
              color:"black"
            }}
          >
            Smart Home Management System{" "}
          </p>
          </Link>
          <Link style={{textDecoration:"none"}} to={"/project"}>
          <p
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              height: "30px",
              width: "100%",
              cursor: "pointer",
              borderRadius: "2px",
              paddingLeft: "5px",
              alignContent: "center",
              color:"black"
            }}
          >
            Smart Home Management System{" "}
          </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
