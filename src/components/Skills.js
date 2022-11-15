import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import python from "../assets/img/python.svg";
import css from "../assets/img/css.svg";
import django from "../assets/img/django.svg";
import html from "../assets/img/html.svg";
import javascript from "../assets/img/java-script.svg";
import reactLogo from "../assets/img/reactLogo.svg";

import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  // make a gallery show style Carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                I Learn the Main Languages, framworks and libraries to build a
                website. both in server-side and client-side. Also I'm learning
                other useful libraries, frameworks and skills that is useful for
                developing a website from 0 to 100. like Database
                management(Design, SQL and NoSQL), Caching, 3D design, animation
                and etc.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={python} alt="python logo" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={django} alt="django logo" />
                  <h5>Django</h5>
                </div>
                <div className="item">
                  <img src={html} alt="html logo" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="css logo" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="js logo" />
                  <h5>Java Script</h5>
                </div>
                <div className="item">
                  <img src={reactLogo} alt="react logo" />
                  <h5>React.js</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};

export default Skills;
