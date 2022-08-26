import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, ProgressBar, Tab, Tabs } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);
  const { skill1 } = skills;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <Tabs className="tabs-wrapper" defaultActiveKey={'technical-skills'} fill>
            <Tab className="skills-wrapper" eventKey="technical-skills" title="Technical Skills">
              <Row>
                <Col>
                  <div className="skills-label">JavaScript</div>
                  <ProgressBar now={100}></ProgressBar>
                  <div className="skills-label">JavaScript</div>
                  <ProgressBar now={80}></ProgressBar>
                  <div className="skills-label">JavaScript</div>
                  <ProgressBar now={60}></ProgressBar>
                </Col>
                <Col></Col>
              </Row>
            </Tab>
            <Tab className="skills-wrapper" eventKey="soft-skills" title="Soft Skills">
              <Row>
                <Col>
                  <div className="skills-label">JavaScript</div>
                  <ProgressBar now={100}></ProgressBar>
                  <div className="skills-label">JavaScript</div>
                  <ProgressBar now={80}></ProgressBar>
                  <div className="skills-label">JavaScript</div>
                  <ProgressBar now={60}></ProgressBar>
                </Col>
                <Col></Col>
              </Row>
            </Tab>
          </Tabs>
        </Fade>
      </Container>
    </section>
  );
};

export default Skills;
