import React from "react";
import { ArrowRight, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "WanderLust",
      description:
        "An online platform inspired by Airbnb, that connects travelers looking for short-term accommodations with property owners who want to rent out their space. It offers a wide range of listings created by the property owners, allowing travelers to explore the property details and provide a feedback based on their experiences!",
      tags: ["MongoDB", "EJS", "Express.js", "Node.js", "Bootstrap"],
      image:
        "./Home.jpg",
      demo: "#",
      source: "#",
    },
    {
      id: 2,
      title: "NobleDeeds",
      description:
        "A charitable giving platform that efficiently bridges generous donors and NGOs or causes that require assistance. It not only enables users to donate to active charity campaigns but also to create their own personalized fundraising campaigns. The website features real-time tracking of donations, secure payments, and NGO management, thus generating transparency and trust. Additionally, the platform's easy-to-use interface enables donors as well as campaign creators to easily use the platform and practice effective giving.",
      tags: [
        "MongoDB",
        "React",
        "Express.js",
        "Node.js",
        "Bootstrap",
        "Material UI",
        "Canva",
      ],
      image:
        "./Donation.jpg",
      demo: "#",
      source: "#",
    },
    {
      id: 3,
      title: "Table Tales",
      description:
        "A visually engaging restaurant website with an aesthetically pleasing menu listed under starters, mains, drinks, and desserts. WordPress-based, the site features highlighted dishes, and the website can be easily navigated by visitors to read and discover recipes. Aesthetically and user-experience-focused, it has minimalist design, responsive layout, and easy navigation.",
      tags: ["WordPress", "Elementor", "Astra", "Canva"],
      image:
        "./Restaurant.jpg",
      demo: "#",
      source: "#",
    },
  ];

  return (
    <section id="projects" className="mx-5 my-5">
      <div className="projects-container">
        <AnimatedSection>
          <h2 className="display-5 fw-bold mb-2 text-white">
            Featured Projects
          </h2>
          <div className="custom-underline mb-4"></div>
        </AnimatedSection>

        <div className="d-flex flex-column gap-5">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 200}>
              <div className="row g-4 align-items-center">
                <div className="col-md-7">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded shadow-sm project-img"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                </div>
                <div className="col-md-5">
                  <h3 className="h4 fw-bold mb-3">{project.title}</h3>
                  <p className="text-muted mb-3">{project.description}</p>

                  <div className="mb-4 d-flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="badge rounded-pill bg-light text-primary border border-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="d-flex gap-3">
                    <a
                      href={project.demo}
                      className="text-primary fw-medium d-flex align-items-center gap-1 text-decoration-none"
                    >
                      Live Demo <ArrowRight size={16} />
                    </a>
                    <a
                      href={project.source}
                      className="text-secondary fw-medium d-flex align-items-center gap-1 text-decoration-none"
                    >
                      Source Code <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={600}>
          <div className="text-center mt-5">
            <a
              href="#"
              className="text-primary fw-medium text-decoration-none d-inline-flex align-items-center gap-1"
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
