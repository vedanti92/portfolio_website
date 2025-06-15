import React from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";

const AnimatedSection = ({ children, delay = 0 }) => {
  const { ref, visible } = useScrollAnimation(delay);

  return (
    <div
      ref={ref}
      className={`scroll-animate ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
