import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import Hobbies from "../components/Hobbies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Certifications />
        <Hobbies />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
