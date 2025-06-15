import React, { useEffect, useRef, useState } from "react";
import "./About.css";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "EJS",
    "React",
    "MongoDB",
    "MySQL",
    "Express.js",
    "Node.js",
    "Canva",
    "WordPress",
    "Git",
    "Render",
  ];

  // Scroll Animation
  const useScrollAnimation = (delay = 0) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, []);

    return { ref, visible, delay };
  };

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

  return (
    <section id="about" className="bg-light custom-bg-opacity m-5 text-white">
      <div className="about-container">
        <AnimatedSection>
          <h2 className="display-5 fw-bold mb-2">About Me</h2>
          <div className="custom-underline mb-4"></div>
        </AnimatedSection>

        <div className="row">
          <div className="col-12">
            <AnimatedSection delay={200}>
              <p className="lead mb-4">
                I'm a passionate full stack developer with a focus on creating
                efficient, scalable, and user-friendly web applications. With
                over 5 years of experience in the field, I've worked on a
                variety of projects ranging from small business websites to
                complex enterprise applications.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <p className="lead mb-4">
              What truly excites me is bringing ideas to life — turning concepts into fully functional web experiences that not only meet user needs but also exceed expectations. I strive to build applications that are not just efficient, but thoughtfully designed and enjoyable to use. To achieve this, I stay up-to-date with the latest trends, tools, and best practices in the ever-evolving world of web development, continuously learning and experimenting to craft innovative, engaging solutions.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <p className="lead">
              When I’m not coding, you’ll likely find me exploring new technologies, contributing to open-source projects, or unwinding through my favorite hobbies.
              </p>
            </AnimatedSection>
          </div>
        </div>

        <AnimatedSection delay={600}>
          <div className="mt-5">
            <h4 className="fw-semibold mb-3">Technical Skills</h4>
            <div className="d-flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="badge rounded-pill custom-skill-pill"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
