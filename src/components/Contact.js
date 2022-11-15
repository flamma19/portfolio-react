import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <Row>
              <Col sm={6} className="px-1">
                <h3>Phone</h3>
                <h4>09100571663</h4>
              </Col>
            </Row>
            <Row>
              <Col sm={6} className="px-1">
                <br />
                <h3>EMail</h3>
                <h4>mahdivafaii1999@gmail.com</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
