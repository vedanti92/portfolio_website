import React, { useEffect, useRef } from "react";
import { GraduationCap, Calendar, School, BookOpen } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import "./Education.css";

const Education = () => {
  const timelineContainerRef = useRef(null);
  const timelineLineRef = useRef(null);

  useEffect(() => {
    const updateTimelineHeight = () => {
      if (timelineContainerRef.current && timelineLineRef.current) {
        const items =
          timelineContainerRef.current.querySelectorAll(".timeline-item");
        if (items.length > 0) {
          const firstItem = items[0];
          const lastItem = items[items.length - 1];
          const firstBox = firstItem.querySelector(".col-md-6 > div");
          const lastBox = lastItem.querySelector(".col-md-6 > div");

          const firstBoxRect = firstBox.getBoundingClientRect();
          const lastBoxRect = lastBox.getBoundingClientRect();
          const containerRect =
            timelineContainerRef.current.getBoundingClientRect();

          // Calculate positions relative to the container
          const lineTop = firstBoxRect.top - containerRect.top;
          const lineHeight = lastBoxRect.bottom - firstBoxRect.top;

          // Apply the styles
          timelineLineRef.current.style.top = `${lineTop}px`;
          timelineLineRef.current.style.height = `${lineHeight}px`;
        }
      }
    };

    // Create a MutationObserver to watch for changes
    const observer = new MutationObserver(updateTimelineHeight);

    // Start observing the container for changes
    if (timelineContainerRef.current) {
      observer.observe(timelineContainerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      });
    }

    // Initial calculation
    updateTimelineHeight();

    // Recalculate after a short delay
    setTimeout(updateTimelineHeight, 100);

    // Handle window resize
    window.addEventListener("resize", updateTimelineHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateTimelineHeight);
    };
  }, []);

  const educationItems = [
    {
      degree: "Bachelor of Electronics and Computer Engineering",
      institution: "P. E. S. 's Modern College of Engineering, Pune",
      period: "2021 - 2025",
      description: "Specialized in Electronics and Computer Engineering.",
      icon: GraduationCap,
    },
    {
      degree: "12th Grade",
      institution: "Millennium National School and Junior College, Pune",
      period: "2019 - 2021",
      description:
        "Completed higher secondary education with PCM (Physics, Chemistry, Math).",
      icon: School,
    },
    {
      degree: "10th Grade",
      institution: "Millennium National School and Junior College, Pune",
      period: "2019",
      description:
        "Completed secondary education with a focus on Mathematics and Science.",
      icon: BookOpen,
    },
  ];

  return (
    <section id="education" className="mx-5 my-5">
      <div className="education-container">
        <AnimatedSection>
          <h2 className="display-5 fw-bold mb-2 text-white">Education</h2>
          <div className="custom-underline mb-4"></div>
          <div className="timeline-underline mb-5"></div>
        </AnimatedSection>

        <div
          className="position-relative timeline-container"
          ref={timelineContainerRef}
        >
          <div className="timeline-line" ref={timelineLineRef}></div>

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
                    <div
                      className="p-4 rounded shadow-sm hover-shadow"
                      style={{ backgroundColor: "#060c1e", color: "white" }}
                    >
                      <div
                        className="d-flex align-items-start mb-3"
                        style={{ backgroundColor: "#060c1e" }}
                      >
                        <div
                          className="me-3 p-2 text-primary rounded"
                          style={{ border: "2px solid #0d6efd" }}
                        >
                          <Icon size={24} />
                        </div>
                        <div style={{ backgroundColor: "#060c1e" }}>
                          <h5
                            className="mb-1 text-white"
                            style={{ backgroundColor: "#060c1e" }}
                          >
                            {item.degree}
                          </h5>
                          <small
                            className="text-white-50"
                            style={{ backgroundColor: "#060c1e" }}
                          >
                            {item.institution}
                          </small>
                        </div>
                      </div>
                      <div
                        className="d-flex align-items-center text-white-50 mb-2"
                        style={{ backgroundColor: "#060c1e" }}
                      >
                        <Calendar
                          size={16}
                          className="me-2"
                          style={{ backgroundColor: "#060c1e" }}
                        />
                        <small style={{ backgroundColor: "#060c1e" }}>
                          {item.period}
                        </small>
                      </div>
                      <p
                        className="mb-0 text-white-50"
                        style={{ backgroundColor: "#060c1e" }}
                      >
                        {item.description}
                      </p>
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
