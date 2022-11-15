import React from "react";
import blogSite from "../assets/img/projects/blog-site.jpg";
import dashboardUi from "../assets/img/projects/dashboard-ui.jpg";
import glassButtons from "../assets/img/projects/glass-buttons.jpg";
import glassCards from "../assets/img/projects/glass-cards.jpg";
import noteApp from "../assets/img/projects/note-app.jpg";
import queraApp from "../assets/img/projects/quera-app.jpeg";
import weatherApp from "../assets/img/projects/weather-app.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

// Make a list of projects based on their category
const Projects = () => {
  const frontProjects = [
    {
      title: "GlassMorphism Card Design",
      description: "HTML & CSS & JS",
      imgUrl: glassCards,
      address:
        "https://flamma19.github.io/mini-codes/glass-morphism-card/index.html",
    },
    {
      title: "GlassMorphism Buttons",
      description: "HTML & CSS & JS",
      imgUrl: glassButtons,
      address:
        "https://flamma19.github.io/mini-codes/glass-morphism-button/index.html",
    },
    {
      title: "Weather Application",
      description: "HTML & CSS & JS with using some API",
      imgUrl: weatherApp,
      address: "https://flamma19.github.io/weather-app/",
    },
    {
      title: "Dashboard UI",
      description: "HTML & CSS & JS",
      imgUrl: dashboardUi,
      address: "https://flamma19.github.io/dashboard-sample1/",
    },
  ];
  const backProjects = [
    {
      title: "Blog Site",
      description: "Python & Django",
      imgUrl: blogSite,
      address: "https://github.com/flamma19/drf_project",
    },
    {
      title: "Quera College Final Test ( Charity Site )",
      description: "Python & Django",
      imgUrl: queraApp,
      address: "https://github.com/flamma19/quera_project",
    },
  ];
  const fullProjects = [
    {
      title: "Note App",
      description:
        "Python & Django for BackEnd and HTML & CSS & JS & React for FrontEnd",
      imgUrl: noteApp,
      address: "https://github.com/flamma19/note-app-react-django-",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>This is My Projects</p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">FrontEnd Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">FullStack Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">BackEnd Projects</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="sliceInUp">
                <Tab.Pane eventKey="first">
                  {/* A loop that iterates over the array of objects and returns a new array of JSX
                  elements that address to another component ProjectCard. */}

                  <Row>
                    {frontProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {fullProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {backProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"></img>
    </section>
  );
};

export default Projects;
