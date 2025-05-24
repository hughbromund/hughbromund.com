import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./NavigationBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from "react-router";

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
          <Navbar.Brand as={NavLink} to="/" offset={-70} style={{cursor: "pointer"}}>
            <strong>Hugh Bromund</strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="projects" offset={-70} style={{cursor: "pointer"}}>
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="about" offset={-70} style={{cursor: "pointer"}}>
                About Me
              </Nav.Link>
              <Nav.Link as={Link} to="experience" offset={-70} style={{cursor: "pointer"}}>
                Experience
              </Nav.Link>
              <Nav.Link as={Link} to="contact" offset={-70} style={{cursor: "pointer"}}>
                Contact Me
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
