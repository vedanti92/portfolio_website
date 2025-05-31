import React from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="navbar fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <a href="#home" className="navbar-brand fw-bold">
          Portfolio.
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
