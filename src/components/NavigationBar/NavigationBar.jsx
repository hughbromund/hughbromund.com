import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./NavigationBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, animateScroll as scroll } from "react-scroll";
import Container from 'react-bootstrap/Container';
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";

// import history from "../../routing/History";
// import { ABOUT_ME, HOME_PATH, PROJECTS } from "../../constants/Constants";

export default class NavigationBar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div>
        <Navbar
          fixed="top"
          expand="md"
          variant="dark"
          className={classes.navbar}
        >
          <Navbar.Brand onClick={this.scrollToTop}>
            <strong>Hugh Bromund</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={false}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  activeClass="active"
                  to="about"
                  spy={false}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About Me
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  activeClass="active"
                  to="experience"
                  spy={false}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Experience
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={false}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact Me
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link target="_blank" href="https://github.com/hughbromund">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  color="white"
                  size="2x"
                />
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://www.linkedin.com/in/hughbromund/"
              >
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  color="white"
                  size="2x"
                />
              </Nav.Link>
              <Nav.Link target="_blank" href="mailto:hugh@bromund.net">
                <FontAwesomeIcon
                  icon={["fas", "envelope"]}
                  color="white"
                  size="2x"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
