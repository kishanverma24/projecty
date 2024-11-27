import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import successImage from "../../../public/images/success.png"; // renamed import for clarity

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false); // Start with `false`
  const [error, setError] = useState(null);
  const { id, token } = useParams(); // Destructure params for readability

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const response = await fetch(
          `https://serverprojecty.onrender.com/api/auth/${id}/verify/${token}`,
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Verification failed");
        }

        const data = await response.json();
        if (data.success) {
          setValidUrl(true);
        } else {
          setError("Invalid or expired verification link.");
        }
      } catch (error) {
        setError(error.message || "Something went wrong.");
      }
    };

    verifyEmailUrl();
  }, [id, token]);

  return (
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
      {validUrl ? (
        <>
          <img
            src={successImage}
            alt="Success"
            className="success-image"
            style={{ width: "180px", borderRadius: "20px" }}
          />
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button className="green-btn">Login</button>
          </Link>
        </>
      ) : error ? (
        <div className="error-message">
          <h1>{error}</h1>
          <Link to="/">
            <button className="retry-btn">Go to Home</button>
          </Link>
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </div>
  );
};

export default EmailVerify;
