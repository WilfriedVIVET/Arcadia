import React, { useEffect, useState } from "react";

const Alert = ({ message, color }) => {
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      {showAlert && (
        <div className={`alert-container ${message ? "active" : ""}`}>
          <div
            className={`alert ${color === "error" ? "alert-error" : ""} ${
              color === "success" ? "alert-success" : ""
            }`}
          >
            <span>{message}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
