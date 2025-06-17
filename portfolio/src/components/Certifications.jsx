import React from "react";
import { Badge, GraduationCap, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import "./Certifications.css";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Apna College",
      date: "Jan 2025",
      description:
        "A comprehensive program that teaches both front-end and back-end development using the MERN stack along with deployment practices.",
      icon: <Award size={24} />,
    },
    {
      title: "Developing Front-End Apps with React",
      issuer: "Coursera",
      date: "Oct 2023",
      description:
        "Hands-on course focused on building dynamic, component-based user interfaces using React, including hooks, props, state management, and routing.",
      icon: <Award size={24} />,
    },
    {
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      issuer: "Coursera",
      date: "July 2023",
      description:
        "A beginner-friendly course covering the fundamentals of building responsive web pages using HTML, styling with CSS, and adding interactivity with JavaScript.",
      icon: <Award size={24} />,
    },
  ];

  return (
    <section id="certifications" className="mx-5 my-5">
      <div className="certifications-container">
        <AnimatedSection>
          <h2 className="display-6 fw-bold mb-2 text-white">Certifications</h2>
          <div className="custom-underline mb-4"></div>
        </AnimatedSection>

        <div className="row gy-4">
          {certifications.map((cert, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <AnimatedSection delay={index * 100 + 200}>
                <div className="card shadow-sm h-100 certification-card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="me-3 p-2 rounded"
                        style={{
                          border: "2px solid #6c58f1",
                          color: "#6c58f1",
                        }}
                      >
                        {cert.icon}
                      </div>
                      <h5 className="card-title mb-0">{cert.title}</h5>
                    </div>
                    <p
                      className="small mb-1"
                      style={{ color: "#9398a1", fontStyle: "italic" }}
                    >
                      {cert.issuer}
                    </p>
                    <p className="small mb-3" style={{ color: "#9398a1" }}>
                      {cert.date}
                    </p>
                    <p
                      className="card-text text-secondary"
                      style={{ fontWeight: "600" }}
                    >
                      {cert.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
