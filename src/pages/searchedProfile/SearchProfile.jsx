import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useParams } from "react-router-dom";
import { Examples } from "../../../Example";

const Profile = () => {
  const [searchUser, setSearchUser] = useState(null);
  const [error, setError] = useState(null);
  const { username } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    const fetchSearchedUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/user/profile/${username}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        console.log(data);

        if (!data.success) {
          console.log("Error occured in the data", data);
        }
        setSearchUser(data.searchedUser);

        setError(null);
      } catch (error) {
        console.log(error);
        console.log(data);

        setError("Error while searching user", error.message);
      }
    };

    fetchSearchedUser();
  }, [username]);

  if (!searchUser && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Navbar />
      <div>
        <p>
          <strong>UserName:</strong> {searchUser.userName}
        </p>
        <p>
          <strong>Name:</strong> {searchUser.fullName}
        </p>
        <p>
          <strong>Email:</strong> {searchUser.email}
        </p>
        <p>
          <strong>Phone:</strong> {searchUser.phone || "N/A"}
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          {searchUser.linkedIn ? (
            <a
              href={searchUser.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {searchUser.linkedIn}
            </a>
          ) : (
            "N/A"
          )}
        </p>
        <p>
          <strong>Resume Link:</strong>{" "}
          {searchUser.resume ? (
            <a
              href={searchUser.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          ) : (
            "N/A"
          )}
        </p>
      </div>

      <hr />
      <div>
        <p>
          <strong>Projects</strong>
        </p>
        <div>
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
    </div>
  );
};

export default Profile;
