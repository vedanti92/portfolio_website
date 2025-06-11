import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-md fixed-top ${
        isScrolled
          ? "bg-light shadow-sm py-2 backdrop-blur"
          : "bg-transparent py-3"
      } transition`}
      style={{
        transition: "all 0.3s ease",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
        zIndex: 1050,
      }}
    >
      <div className="navbar-container d-flex justify-content-between align-items-center px-3">
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

        {/* Mobile Menu Button */}
        <button
          className="d-md-none btn btn-link text-dark p-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          style={{ zIndex: 1060, position: "relative" }}
        >
          {isMobileMenuOpen ? (
            <X size={24} style={{ color: "#9398a1" }} />
          ) : (
            <Menu size={24} style={{ color: "#9398a1" }} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`d-md-none position-fixed top-0 start-0 w-100 h-100 pt-5 px-3 ${
          isMobileMenuOpen ? "translate-none" : "translate-end"
        }`}
        style={{
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          zIndex: 1020
        }}
      >
        <div className="d-flex flex-column gap-4 mt-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="fs-5 fw-medium nav-link"
              style={{ color: "#9398a1" }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
