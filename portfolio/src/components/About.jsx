import React from "react";
import "./About.css";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "EJS",
    "PHP",
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

  return (
    <section
      id="about"
      className="bg-light custom-bg-opacity mx-5 my-3 text-white"
    >
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
                efficient, scalable, and user-friendly web applications.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <p className="lead mb-4">
                What truly excites me is bringing ideas to life — turning
                concepts into fully functional web experiences that not only
                meet user needs but also exceed expectations. I strive to build
                applications that are not just efficient, but thoughtfully
                designed and enjoyable to use. To achieve this, I stay
                up-to-date with the latest trends, tools, and best practices in
                the ever-evolving world of web development, continuously
                learning and experimenting to craft innovative, engaging
                solutions.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <p className="lead">
                When I’m not coding, you’ll likely find me exploring new
                technologies, contributing to open-source projects, or unwinding
                through my favorite hobbies.
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
                  className="badge rounded-pill custom-skill-pill text-white"
                  style={{ backgroundColor: "#161e50" }}
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
