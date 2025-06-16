import React from "react";
import { Badge, GraduationCap, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description:
        "Expertise in designing distributed systems on AWS infrastructure",
      icon: <Award size={24} />,
    },
    {
      title: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2022",
      description: "Advanced knowledge of Scrum methodology and implementation",
      icon: <Badge size={24} />,
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udacity",
      date: "2021",
      description:
        "Comprehensive curriculum covering modern web development stack",
      icon: <GraduationCap size={24} />,
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
                <div className="card border-0 shadow-sm h-100 certification-card">
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      <div className="rounded-circle bg-primary bg-opacity-25 text-primary d-flex justify-content-center align-items-center me-3 icon-wrapper">
                        {cert.icon}
                      </div>
                      <h5 className="card-title mb-0">{cert.title}</h5>
                    </div>
                    <p className="text-muted small mb-1">{cert.issuer}</p>
                    <p className="text-muted small mb-3">{cert.date}</p>
                    <p className="card-text text-secondary">
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
