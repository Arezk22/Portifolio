// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
import Hero from "./Components/HeroSection";
import About from "./Components/AboutSection";
import BtnDownloadSection from "./Components/BtnDownloadSection";
import SkillsSection from "./Components/SkillsSection";
import EducationSection from "./Components/EducationSection";
import ContactFooter from "./Components/ContactSection";

function App() {
  return (
    <>
      <Hero />
      <About />
      <div className="container text-center my-5 justify-content-center ">
        <BtnDownloadSection />
      </div>
      <SkillsSection />
      <EducationSection />
      <ContactFooter />
    </>
  );
}

export default App;
