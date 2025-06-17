import React from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Message sent!\nThank you for your message. I'll get back to you soon."
    );
    event.target.reset();
  };

  return (
    <section
      id="contact"
      className="mx-5 my-5 p-5 rounded"
      style={{ backgroundColor: "#060c1e" }}
    >
      <div className="contact-container">
        <AnimatedSection>
          <h2 className="display-5 fw-bold mb-2 text-white">Get In Touch</h2>
          <div className="custom-underline mb-4"></div>
          <div className="timeline-underline mb-5"></div>
        </AnimatedSection>

        <div className="text-end mb-4">
          <a href="/resume.pdf" download className="btn btn-outline-light">
            Download Resume
          </a>
        </div>

        <div className="row g-5">
          <div className="col-md-6">
            <p className="fs-5 mb-4 text-white">
              I'm currently available for freelance work or full-time positions.
              If you have a project that you want to get started, think you need
              my help with something, or just want to say hello, then get in
              touch.
            </p>

            <div className="d-flex align-items-center mb-3">
              <div
                className="me-3 p-2 rounded bg-opacity-10 text-primary"
                style={{ backgroundColor: "#101434" }}
              >
                <Mail
                  size={20}
                  style={{ backgroundColor: "transparent", color: "#6c58f1" }}
                />
              </div>
              <a
                href="mailto:vedanti.r.bagade@gmail.com"
                className="text-decoration-none text-white hover-effect"
              >
                vedanti.r.bagade@gmail.com
              </a>
            </div>

            <div className="d-flex align-items-center mb-3">
              <div
                className="me-3 p-2 rounded bg-opacity-10 text-primary"
                style={{ backgroundColor: "#101434" }}
              >
                <Github
                  size={20}
                  style={{ backgroundColor: "transparent", color: "#6c58f1" }}
                />
              </div>
              <a
                href="https://github.com/vedanti92"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white hover-effect"
              >
                github.com/vedanti92
              </a>
            </div>

            <div className="d-flex align-items-center mb-3">
              <div
                className="me-3 p-2 rounded bg-opacity-10 text-primary"
                style={{ backgroundColor: "#101434" }}
              >
                <Linkedin
                  size={20}
                  style={{ backgroundColor: "transparent", color: "#6c58f1" }}
                />
              </div>
              <a
                href="https://linkedin.com/in/vedanti92"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-white hover-effect"
              >
                linkedin.com/in/vedanti92
              </a>
            </div>
          </div>

          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Optional Custom Hover Effect */}
      <style>{`
        .hover-effect:hover {
          color: #0d6efd;
        }
      `}</style>
    </section>
  );
};

export default Contact;
