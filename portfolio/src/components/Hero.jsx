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
    <section id="home">
      {/* Glowing Circles */}
      <div className="position-absolute w-100 h-100 top-0 start-0 z-n1">
        <div className="glow-circle bg-primary top-25 start-25"></div>
        <div className="glow-circle bg-accent bottom-33 end-25"></div>
      </div>
    </section>
  );
};

export default Hero;
