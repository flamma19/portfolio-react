import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import textbw from "../assets/img/textbw.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 className="textlogo2">FLAMMA</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            {/* Social App Links */}
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mahdivafaii1999/">
                <img src={navIcon1} alt="linkedin" />
              </a>
              <a href="https://github.com/flamma19">
                <img src={navIcon2} alt="github" />
              </a>
              <a href="https://www.instagram.com/flamma_19/">
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
            <p>By Mahdi Vafaii. 2022</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
