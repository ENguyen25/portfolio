import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Works from './Works';
import Footer from '../Footer/Footer';

import { PortfolioProvider } from '../../context/context';

import {
  navBarData,
  projectsData,
  footerData,
} from '../../mock/data';

function Portfolio() {
  const [navBar, setNavBar] = useState({});
  const [works, setWorks] = useState([]);
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setNavBar({ ...navBarData });
    setWorks([...projectsData]);
    setFooter({ ...footerData });
  }, []);

  return (
      <PortfolioProvider value={{ navBar, works, footer }}>
        <NavBar />
        <Works />
        <Footer />
      </PortfolioProvider>
  );
}

export default Portfolio;
