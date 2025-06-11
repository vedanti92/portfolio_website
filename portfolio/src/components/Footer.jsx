import React from "react";
import { ArrowUp } from "lucide-react";

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
          <p>
            &copy; {new Date().getFullYear()} Vedanti Bagade. All rights
            reserved.
          </p>
        </div>
        <div>
          <button
            className="btn btn-sm rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "36px", height: "36px" }}
            onClick={scrollToTop}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
