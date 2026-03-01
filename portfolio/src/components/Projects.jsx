import React from "react";
import { ArrowRight, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Xpenso",
      description:
        "Xpenso is a personal finance management platform that helps users efficiently track and analyze their income and expenses. It allows users to record transactions, categorize spending, and gain insights through interactive dashboards and visualizations. The platform features secure authentication, real-time summaries, and filter-based transaction analysis, enabling users to make informed financial decisions. With its intuitive interface and dynamic React dashboard, Xpenso empowers users to manage their finances effectively and maintain control over their budget.",
      tags: ["Java", "Spring Boot", "React", "MySQL", "Tailwind CSS"],
      image: "./Money.jpg",
      demo: "https://xpenso-app.netlify.app/",
      source: "https://github.com/vedanti92/xpenso-app",
    },
    {
      id: 2,
      title: "Linkly",
      description:
        "Linkly is a secure URL shortening and analytics platform that enables users to generate compact, shareable links while tracking detailed click insights. The application allows authenticated users to create and manage short URLs, monitor click activity, and analyze performance through a clean and intuitive dashboard. With secure JWT-based authentication and user-specific data access, Linkly ensures that each user’s links and analytics remain private and protected. Featuring seamless redirection workflows and real-time click tracking, Linkly combines simplicity with powerful analytics to help users understand and optimize their link engagement.",
      tags: ["Java", "Spring Boot", "React", "MySQL", "Tailwind CSS"],
      image: "./Website.jpg",
      demo: "https://linkly-clicks.netlify.app/",
      source: "https://github.com/vedanti92/linkly-app",
    },
    {
      id: 3,
      title: "WanderLust",
      description:
        "An online platform inspired by Airbnb, that connects travelers looking for short-term accommodations with property owners who want to rent out their space. It offers a wide range of listings created by the property owners, allowing travelers to explore the property details and provide a feedback based on their experiences!",
      tags: ["MongoDB", "EJS", "Express.js", "Node.js", "Bootstrap"],
      image: "./Home.jpg",
      demo: "https://wanderlust-qgxn.onrender.com/listings",
      source: "https://github.com/vedanti92/wanderlust-app",
    },
  ];

  return (
    <section id="projects" className="mx-5 my-5">
      <div className="projects-container">
        <AnimatedSection>
          <h2 className="display-5 fw-bold mb-2 text-white">Projects</h2>
          <div className="custom-underline mb-4"></div>
        </AnimatedSection>

        <div className="d-flex flex-column gap-5 justify-content-center align-items-center">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 200}>
              <div className="project-card">
                <div className="row g-4 align-items-center">
                  <div className="col-md-1"></div>
                  <div className="col-md-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid rounded shadow-sm project-img"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <h3
                      className="h4 fw-bold mb-3 text-white"
                      style={{ backgroundColor: "transparent" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="mb-3"
                      style={{
                        color: "#9398a1",
                        backgroundColor: "transparent",
                      }}
                    >
                      {project.description}
                    </p>

                    <div
                      className="mb-4 d-flex flex-wrap gap-2"
                      style={{ backgroundColor: "transparent" }}
                    >
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="badge rounded-pill"
                          style={{
                            color: "#6c58f1",
                            fontWeight: "600",
                            fontSize: "15px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      className="d-flex gap-3"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <a
                        href={project.demo}
                        className="fw-medium d-flex align-items-center gap-1 text-decoration-none"
                        style={{
                          backgroundColor: "transparent",
                          color: "#6c58f1",
                        }}
                      >
                        Live Demo{" "}
                        <ArrowRight
                          size={16}
                          style={{ backgroundColor: "transparent" }}
                        />
                      </a>
                      <a
                        href={project.source}
                        className="fw-medium d-flex align-items-center gap-1 text-decoration-none"
                        style={{
                          backgroundColor: "transparent",
                          color: "#9398a1",
                        }}
                      >
                        Source Code{" "}
                        <Github
                          size={16}
                          style={{ backgroundColor: "transparent" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600}>
          <div className="text-center mt-5">
            <a
              href="https://github.com/vedanti92"
              className="fw-medium text-decoration-none d-inline-flex align-items-center gap-1"
              style={{ color: "#6c58f1" }}
            >
              View All Projects <ArrowRight size={16} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;
