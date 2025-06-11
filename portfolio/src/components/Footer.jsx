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
      <div className="footer-container flex justify-between mx-auto px-4">
        <div>
          <p>
            &copy; {new Date().getFullYear()} Vedanti Bagade. All rights
            reserved.
          </p>
        </div>
        <div>
          <button className="" onClick={scrollToTop}>
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
