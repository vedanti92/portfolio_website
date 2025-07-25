import React, { useEffect, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nameRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleMouseOver = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const originalText = "Full Stack Developer";
      if (nameRef.current) {
        nameRef.current.innerText = originalText
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iteration) return originalText[index];
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= originalText.length) {
          clearInterval(intervalRef.current);
        }

        iteration += 1 / 3;
      }
    }, 30);
  };

  return (
    <section
      id="home"
      className="position-relative min-vh-100 d-flex align-items-center overflow-hidden px-3 px-md-4 px-lg-5 py-3"
    >
      {/* Glowing Circles */}
      <div className="position-absolute w-100 h-100 top-0 start-0 z-n1">
        <div className="glow-circle bg-primary top-25 start-25"></div>
        <div className="glow-circle bg-accent bottom-33 end-25"></div>
      </div>

      <div className="hero-container pt-5">
        <div className="row align-items-center justify-content-between">
          {/* Text Content */}
          <div className="col-md-6 animate-fade-in mb-5">
            <p className="fs-5 text-accent mb-2" style={{ color: "#3776dc" }}>
              Hello, my name is
            </p>
            <h1 className="display-4 fw-bold mb-3" style={{ color: "white" }}>
              Vedanti Bagade
            </h1>
            <h2
              ref={nameRef}
              onMouseOver={handleMouseOver}
              className="fw-bold mb-4 gradient-text cursor-pointer display-6"
            >
              Full Stack Developer
            </h2>
            <p
              className="fs-5 mb-4"
              style={{ color: "#9398a1", fontStyle: "italic" }}
            >
              I craft thoughtful, elegant, and user-centered web applications —
              driven by a keen eye for detail and a deep passion for design.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <a href="#projects">
                <button className="project-box text-white fw-bold fs-5 px-3 py-2">
                  View My Work
                </button>
              </a>
              <a href="#contact">
                <button className="contact-box fw-bold fs-5 px-3 py-2">
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* Profile */}
          <div className="col-md-6 d-flex justify-content-center animate-fade-in delay-300">
            <div
              className="hero-photo-wrapper"
              onMouseMove={(e) => {
                const wrapper = e.currentTarget;
                const rect = wrapper.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                wrapper.style.transform = `rotateX(${-y * 10}deg) rotateY(${
                  x * 10
                }deg)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
              }}
            >
              <div className="hero-photo-border">
                <div className="hero-photo-inner">
                  <img
                    src="./profile.png"
                    alt="Profile Photo"
                    className="img-fluid"
                    style={{ objectPosition: "center 65%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: "50px" }}></div>
      </div>
    </section>
  );
};

export default Hero;
