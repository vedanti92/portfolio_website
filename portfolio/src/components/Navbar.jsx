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
      <div className="container d-flex justify-content-between align-items-center px-3">
        <a href="#home" className="navbar-brand fw-bold text-primary">
          Portfolio<span className="text-accent">.</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
