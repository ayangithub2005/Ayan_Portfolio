import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ReactGA from "react-ga";

import eCom from "../../Assets/Projects/portfolio.png";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="Personal Portfolio Website"
              description="A responsive personal portfolio website built using React.js to showcase my skills, projects and social profiles."
              link="https://github.com/ayangithub2005/Ayan_Portfolio"
              liveLink="https://ayan-portfolio-gamma.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;