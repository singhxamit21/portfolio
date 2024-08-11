import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bananaTalk from "../../Assets/Projects/bananaTalk.png";
import promptopia from "../../Assets/Projects/promptopia.png";
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
              imgPath={promptopia}
              isBlog={false}
              title="Promptopia"
              description="The Share-Prompt App is a web application designed for creating, managing, and sharing prompts efficiently. It is built using Next.js, which provides server-side rendering and a seamless user experience. The app is styled with Tailwind CSS, ensuring a modern and responsive design. MongoDB is used as the database for handling data storage, while NextAuth handles authentication, offering secure and customizable login options. The application is hosted on Vercel for fast and reliable deployment, and the codebase is managed with GitHub for version control. This tech stack ensures a performant, secure, and scalable platform for users."
              ghLink="https://github.com/singhxamit21/share-prompt-app"
              demoLink="https://share-prompt-app.vercel.app/"
            />
          </Col>
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
