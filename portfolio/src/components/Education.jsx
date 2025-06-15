import React from "react";
import { GraduationCap, Calendar, School } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import "./Education.css";

const Education = () => {
  const educationItems = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      period: "2018 - 2020",
      description:
        "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on neural network optimization techniques for real-time applications.",
      icon: GraduationCap,
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Massachusetts Institute of Technology",
      period: "2014 - 2018",
      description:
        "Graduated with honors. Coursework included Data Structures, Algorithms, Software Engineering, and Database Systems.",
      icon: School,
    },
    {
      degree: "Web Development Bootcamp",
      institution: "Tech Academy",
      period: "2013",
      description:
        "Intensive 12-week program focused on full-stack web development. Built multiple projects using modern JavaScript frameworks.",
      icon: Calendar,
    },
  ];

  return (
    <section id="education" className="mx-5 my-5">
      <div className="education-container">
        <AnimatedSection>
          <h2 className="display-5 fw-bold mb-2">Education</h2>
          <div className="timeline-underline mb-5"></div>
        </AnimatedSection>

        <div className="position-relative timeline-container">
          <div className="timeline-line"></div>

          {educationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={index} delay={index * 200}>
                <div
                  className={`row g-4 mb-5 timeline-item ${
                    index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="timeline-dot bg-primary"></div>
                  <div className="col-md-6">
                    <div className="p-4 rounded shadow-sm hover-shadow">
                      <div className="d-flex align-items-start mb-3">
                        <div className="me-3 p-2 bg-primary bg-opacity-25 text-primary rounded">
                          <Icon size={24} />
                        </div>
                        <div>
                          <h5 className="mb-1">{item.degree}</h5>
                          <small className="text-muted">
                            {item.institution}
                          </small>
                        </div>
                      </div>
                      <div className="d-flex align-items-center text-muted mb-2">
                        <Calendar size={16} className="me-2" />
                        <small>{item.period}</small>
                      </div>
                      <p className="mb-0 text-secondary">{item.description}</p>
                    </div>
                  </div>

                  <div className="d-none d-md-block col-md-6"></div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
