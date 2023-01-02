import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-scroll";
import hugh from "../../assets/hugh_new.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./HomePage.module.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <Row>
          <Col sm>
            <span style={{ float: "right" }}>
              <div className={classes.picture}>
                <Image fluid rounded src={hugh}></Image>
              </div>
            </span>
          </Col>
          <Col sm>
            <h3>
              Hi there{" "}
              <span role="img" aria-label="waving hand">
                👋
              </span>
              , I'm
            </h3>
            <h1>
              <strong>Hugh Bromund</strong>
            </h1>

            <p style={{ maxWidth: "30rem" }}>
              I'm a full-time Software Engineer at <i>Dropbox</i>. I have a
              passion for all things Computer Science.
            </p>
            <Button variant="primary">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Me
              </Link>
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
