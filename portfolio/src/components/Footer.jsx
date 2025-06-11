import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-top py-5">
      <div className="footer-container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 px-5">
        <div>
          <p style={{ color: "#9ca2aa" }}>
            &copy; {new Date().getFullYear()} Vedanti Bagade. All rights
            reserved.
          </p>
        </div>
        <div>
          <button
            className="btn rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: "36px",
              height: "36px",
              border: "1px solid #6e59f5",
            }}
            onClick={scrollToTop}
          >
            <FontAwesomeIcon icon={faArrowUp} style={{ color: "#6e59f5" }} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
