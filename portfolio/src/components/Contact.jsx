import React, { useRef } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import "./Contact.css";
import emailjs from "@emailjs/browser";

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
        alert("Oops! Something went wrong. Please try again later.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="mx-5 my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <AnimatedSection>
          <h2 className="display-5 fw-bold mb-2 text-white">Get In Touch</h2>
          <div className="custom-underline mb-4"></div>
        </AnimatedSection>
        <a href="./Resume.pdf" download>
          <button className="resume-btn">Download Resume</button>
        </a>
      </div>

      <div className="p-5 rounded" style={{ backgroundColor: "#060c1e" }}>
        <div
          className="contact-container"
          style={{ backgroundColor: "#060c1e" }}
        >
          <div className="row g-5" style={{ backgroundColor: "#060c1e" }}>
            <div className="col-md-6" style={{ backgroundColor: "#060c1e" }}>
              <p
                className="fs-5 mb-4"
                style={{ backgroundColor: "#060c1e", color: "#9398a1" }}
              >
                I'm currently available for freelance work or full-time
                positions. If you have a project that you want to get started,
                think you need my help with something, or just want to say
                hello, then get in touch.
              </p>

              <div
                className="d-flex align-items-center mb-3 flex-wrap"
                style={{ backgroundColor: "#060c1e" }}
              >
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
                  className="text-decoration-none hover-effect text-break"
                  style={{ backgroundColor: "#060c1e", color: "#9398a1" }}
                >
                  vedanti.r.bagade@gmail.com
                </a>
              </div>

              <div
                className="d-flex align-items-center mb-3 flex-wrap"
                style={{ backgroundColor: "#060c1e" }}
              >
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
                  className="text-decoration-none hover-effect text-break"
                  style={{ backgroundColor: "#060c1e", color: "#9398a1" }}
                >
                  github.com/vedanti92
                </a>
              </div>

              <div
                className="d-flex align-items-center mb-3 flex-wrap"
                style={{ backgroundColor: "#060c1e" }}
              >
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
                  className="text-decoration-none hover-effect text-break"
                  style={{ backgroundColor: "#060c1e", color: "#9398a1" }}
                >
                  linkedin.com/in/vedanti92
                </a>
              </div>
            </div>

            <div className="col-md-6" style={{ backgroundColor: "#060c1e" }}>
              <form
                ref={form}
                onSubmit={handleSubmit}
                style={{ backgroundColor: "#060c1e" }}
              >
                <div className="mb-3">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control custom-input"
                    placeholder="Your Name"
                    required
                    style={{
                      backgroundColor: "#101434",
                      border: "1px solid #9398a1",
                    }}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="user_email"
                    className="form-control custom-input"
                    placeholder="Your Email"
                    required
                    style={{
                      backgroundColor: "#101434",
                      border: "1px solid #9398a1",
                    }}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control custom-input"
                    rows="5"
                    placeholder="Your Message"
                    required
                    style={{
                      backgroundColor: "#101434",
                      border: "1px solid #9398a1",
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="send-btn w-100 d-flex align-items-center justify-content-center gap-2"
                  disabled={isSubmitting}
                >
                  <Send size={20} style={{ backgroundColor: "transparent" }} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
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
