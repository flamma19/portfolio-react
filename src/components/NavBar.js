import { useState, useEffect } from "react";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/textbw.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // detect the scroll of page and if it was larger than 50 set scrolled state to true.
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    // set the class of navbar to scroll whenever the user scoll the page.
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <h1 class="textlogo1">FLAMMA</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* detect the active link and set the change the class of that */}
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active-navbar--link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects"
                  ? "active-navbar--link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            {/* Social App links */}
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
            <button
              className="vvd"
              onClick={() => alert("Call Me : 09100571663")}
            >
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
