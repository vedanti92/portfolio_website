import React from "react";
import "./Navbar.css";

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
        <a
          href="#home"
          className="navbar-brand fw-bold"
          style={{ color: "#6e59f5" }}
        >
          Portfolio<span style={{ color: "#3a7be4" }}>.</span>
        </a>

        {/* Desktop Menu */}
        <div className="d-none d-md-flex gap-4" style={{ color: "#9398a1" }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link fw-medium">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
