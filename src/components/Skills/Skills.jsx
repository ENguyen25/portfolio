import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, ProgressBar, Tab, Tabs } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <Tabs className="tabs-wrapper" defaultActiveKey="technical-skills" fill>
            <Tab className="skills-wrapper" eventKey="technical-skills" title="Technical Skills">
              <Row>
                <Col>
                  <div className="skills-label">JavaScript</div>
                  <ProgressBar now={100} />
                  <div className="skills-label">React</div>
                  <ProgressBar now={90} />
                  <div className="skills-label">HTML/CSS</div>
                  <ProgressBar now={100} />
                </Col>
                <Col>
                  <div className="skills-label">GraphQL</div>
                  <ProgressBar now={80} />
                  <div className="skills-label">TypeScript</div>
                  <ProgressBar now={80} />
                  <div className="skills-label">Python</div>
                  <ProgressBar now={50} />
                </Col>
              </Row>
            </Tab>
            <Tab className="skills-wrapper" eventKey="soft-skills" title="Soft Skills">
              <Row>
                <Col>
                  <div className="skills-label">Leadership</div>
                  <ProgressBar now={100} />
                  <div className="skills-label">Collaboration</div>
                  <ProgressBar now={100} />
                  <div className="skills-label">Emotional Intelligence</div>
                  <ProgressBar now={100} />
                </Col>
                <Col>
                  <div className="skills-label">Problem-Solving / Critical Thinking</div>
                  <ProgressBar now={100} />
                  <div className="skills-label">Time Management</div>
                  <ProgressBar now={100} />
                  <div className="skills-label">Adaptability</div>
                  <ProgressBar now={100} />
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Fade>
      </Container>
    </section>
  );
};

export default Skills;
