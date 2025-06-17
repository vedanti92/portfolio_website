import React from "react";
import {
  Palette,
  Sparkles,
  CodeXml,
  LibraryBig,
  Trophy,
  MapPin,
  Music,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Hobbies = () => {
  const hobbies = [
    {
      title: "Art & Craft",
      icon: <Palette size={24} />,
      description:
        "I enjoy exploring creativity through DIY art and craft projects, turning simple ideas into beautiful pieces.",
    },
    {
      title: "Dance",
      icon: <Sparkles size={24} />,
      description:
        "I'm a trained Bharatanatyam dancer and have completed my Arangetram. I also love experimenting with other dance forms.",
    },
    {
      title: "Reading Books",
      icon: <LibraryBig size={24} />,
      description:
        "I'm an avid reader who enjoys diving into both science fiction and insightful non-fiction.",
    },
    {
      title: "Open Source Contribution",
      icon: <CodeXml size={24} />,
      description:
        "I actively contribute to open-source projects, focusing on improving documentation, accessibility, and community support.",
    },
    {
      title: "Sports",
      icon: <Trophy size={24} />,
      description:
        "I stay active through skating, basketball, and badminton — they keep me energized and refreshed.",
    },
    {
      title: "Music",
      icon: <Music size={24} />,
      description:
        "I find joy in playing the synthesizer, blending melodies and rhythms to express emotions.",
    },
    {
      title: "Travel",
      icon: <MapPin size={24} />,
      description:
        "Traveling excites me — I love discovering new places, cultures, and capturing experiences along the way.",
    },
  ];

  return (
    <section id="hobbies" className="mx-5 my-5">
      <div className="hobbies-container">
        <AnimatedSection>
          <h2 className="display-5 fw-bold mb-2 text-white">
            Hobbies & Interests
          </h2>
          <div className="custom-underline mb-4"></div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="d-flex flex-column gap-4">
            {hobbies.map((hobby, index) => (
              <div key={index} className="d-flex align-items-start gap-3 p-3">
                <div
                  className="p-2 rounded"
                  style={{ border: "2px solid #6c58f1", color: "#6c58f1" }}
                >
                  {hobby.icon}
                </div>
                <div>
                  <h5 className="mb-1 text-white">{hobby.title}</h5>
                  <p className="mb-0" style={{ color: "#9398a1" }}>
                    {hobby.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hobbies;
