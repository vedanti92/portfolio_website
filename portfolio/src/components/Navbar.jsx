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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`navbar navbar-expand-md fixed-top ${
        isScrolled ? "py-2" : "py-3"
      } transition`}
      style={{
        transition: "all 0.3s ease",
        zIndex: 1050,
        backgroundColor: "transparent !important",
        background: "none !important",
        boxShadow: "none !important"
      }}
    >
      <div className="navbar-container d-flex justify-content-between align-items-center px-3 w-100" style={{ backgroundColor: "transparent !important" }}>
        <a
          href="#home"
          className="navbar-brand fw-bold"
          style={{ color: "#6e59f5" }}
          onClick={(e) => handleNavClick(e, "#home")}
        >
          Portfolio<span style={{ color: "#3a7be4" }}>.</span>
        </a>

        {/* Desktop Menu */}
        <div className="d-none d-md-flex gap-4" style={{ color: "#9398a1" }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="nav-link fw-medium"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="d-md-none">
          <button
            className="btn btn-link text-dark p-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ 
              zIndex: 1060, 
              position: "relative",
              outline: "none",
              boxShadow: "none",
              textDecoration: "none"
            }}
          >
            {isMobileMenuOpen ? (
              <X size={24} style={{ color: "#9398a1" }} />
            ) : (
              <Menu size={24} style={{ color: "#9398a1" }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`d-md-none position-fixed top-0 start-0 w-100 h-100 pt-5 px-3 ${
          isMobileMenuOpen ? "translate-none" : "translate-end"
        }`}
        style={{
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          zIndex: 1020,
          backgroundColor: "rgba(0, 0, 0, 0.9)"
        }}
      >
        <div className="d-flex flex-column gap-4 mt-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="fs-5 fw-medium nav-link"
              style={{ color: "#9398a1" }}
              onClick={(e) => handleNavClick(e, link.href)}
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
