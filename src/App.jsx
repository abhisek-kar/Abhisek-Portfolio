import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Icons from "./components/Icons";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Certifications from "./components/Certifications";
import { Tooltip } from "react-tooltip";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-slate-100 relative">
      <Tooltip id="my-tooltip" />
      <NavBar />
      <Home />
      <Icons />
      <AboutMe />
      <Skills />
      <Projects />
      <Certifications />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
