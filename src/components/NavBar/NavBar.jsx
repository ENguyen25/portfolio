import React, { useContext, useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Navigation = () => {
  const { navBar } = useContext(PortfolioContext);

  return (
    <Navbar sticky="top">
      <Container>
        <Navbar.Brand className='text-color-main' href="#home">E | N</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="about" smooth duration={1000}>
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="projects" smooth duration={1000}>
                Projects
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="skills" smooth duration={1000}>
                Skills
              </Link>
            </Nav.Link>
            <Nav.Link href="https://docs.google.com/document/d/1cHRLwCGccZ3KD2xfvLOkqtrKpqVCtmZaOjzaJiQCXgw/edit?usp=sharing">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
