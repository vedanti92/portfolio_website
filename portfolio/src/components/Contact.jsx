import React from "react";
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
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <AnimatedSection>
          <h2 className="display-5 fw-bold mb-2 text-white">Get In Touch</h2>
          <div className="custom-underline mb-4"></div>
          <div className="timeline-underline mb-5"></div>
        </AnimatedSection>

        <div className="text-end mb-4">
          <a href="/resume.pdf" download className="btn btn-outline-primary">
            Download Resume
          </a>
        </div>

        <div className="row g-5">
          <div className="col-md-6">
            <p className="fs-5 mb-4">
              I'm currently available for freelance work or full-time positions.
              If you have a project that you want to get started, think you need
              my help with something, or just want to say hello, then get in
              touch.
            </p>

            <div className="d-flex align-items-center mb-3">
              <div className="me-3 p-2 rounded-circle bg-primary bg-opacity-10 text-primary">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <a
                href="mailto:john@example.com"
                className="text-decoration-none text-dark hover-effect"
              >
                john@example.com
              </a>
            </div>

            <div className="d-flex align-items-center mb-3">
              <div className="me-3 p-2 rounded-circle bg-primary bg-opacity-10 text-primary">
                <i className="bi bi-github"></i>
              </div>
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark hover-effect"
              >
                github.com/johndoe
              </a>
            </div>

            <div className="d-flex align-items-center mb-3">
              <div className="me-3 p-2 rounded-circle bg-primary bg-opacity-10 text-primary">
                <i className="bi bi-linkedin"></i>
              </div>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark hover-effect"
              >
                linkedin.com/in/johndoe
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
                <i className="bi bi-send-fill"></i>
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
