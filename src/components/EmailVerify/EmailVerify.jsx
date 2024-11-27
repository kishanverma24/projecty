import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import success from "../../../public/images/success.png";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const response = await fetch(
          //   "https://serverprojecty.onrender.com/api/auth/login",
          `https://serverprojecty.onrender.com/api/auth/${param.id}/verify/${param.token}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        // console.log(data);
        if (data.success) {
          setValidUrl(true);
        }
      } catch (error) {
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <>
      {validUrl ? (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <img
            src={success}
            alt="success_img"
            className="success_img"
            style={{
              border: "none",
              outline: "none",
              padding: "12px 0",
              backgroundColor: "#3bb19b",
              borderRadius: "20px",
              width: "180px",
              fontWeight: "bold",
              fontSize: "14px",
              cursor: "pointer",
            }}
          />
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button className="green_btn">Login</button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </>
  );
};

export default EmailVerify;
