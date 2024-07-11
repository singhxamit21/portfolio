import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bananaTalk from "../../Assets/Projects/bananaTalk.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bananaTalk}
              isBlog={false}
              title="Banana Talk"
              description="Fun Speak is a web-based application designed to facilitate engaging and interactive conversations. It offers a variety of tools and features aimed at enhancing communication experiences, such as conversation starters, language learning aids, and games. The platform is user-friendly and can be utilized for personal enjoyment or educational purposes, making conversations more fun and dynamic."
              ghLink="https://github.com/singhxamit21/vanillaJS"
              demoLink="https://fun-speak.netlify.app/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
