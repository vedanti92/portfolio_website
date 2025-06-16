import React from "react";
import { AlertTriangle } from "lucide-react";
import "./NotFound.css"

const NotFound = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{ minHeight: "80vh", color: "#9398a1" }}
    >
      <AlertTriangle size={64} className="text-warning mb-3" />
      <h1 className="display-4 text-white">404</h1>
      <h3 className="mb-3 text-light">Page Not Found</h3>
      <p className="mb-4" style={{ maxWidth: "400px" }}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <a href="/">
        <button className="home-btn">Go to Home</button>
      </a>
    </div>
  );
};

export default NotFound;
