import React, { useState, useEffect } from 'react';
import NavBar from './NavBar/NavBar';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { navBarData, heroData, aboutData, projectsData, skillsData, contactData, footerData } from '../mock/data';

function App() {
  const [navBar, setNavBar] = useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [skills, setSkills] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setNavBar({ ...navBarData });
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setSkills({...skillsData});
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ navBar, hero, about, projects, skills, contact, footer }}>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
