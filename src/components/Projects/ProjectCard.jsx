import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ProjectCard.module.css";

const DEFAULT_ACTIVE_KEY = "role";

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSection: DEFAULT_ACTIVE_KEY };
  }

  render() {
    var techList = [];
    for (var i = 0; i < this.props.techNames.length; i++) {
      techList.push(
        <Col>
          <Row className={classes.techCol}>
            <FontAwesomeIcon
              icon={["fab", this.props.techCodes[i]]}
              size="2x"
            />
          </Row>
          <Row className={classes.techCol}>{this.props.techNames[i]}</Row>
        </Col>
      );
    }
    var awardsList = [];

    if (this.props.awardsNames !== undefined) {
      for (i = 0; i < this.props.awardsNames.length; i++) {
        awardsList.push(
          <Row>
            <a href={this.props.awardsLinks[i]}>
              <span role="img" aria-label="trophy">
                🏆
              </span>{" "}
              - {this.props.awardsNames[i]}
            </a>
          </Row>
        );
      }
    }
    if (awardsList.length === 0) {
      awardsList.push(<Row>No Awards</Row>);
    }

    return (
      <div>
        <Card className={classes.card}>
          <Card.Body>
            <Card.Title>
              <b>{this.props.name}</b> {this.props.demo ? "| " : ""}
              <a
                hidden={this.props.demo ? false : true}
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.demo}
              >
                Demo
              </a>
              <span style={{ float: "right" }}>
                <a
                  hidden={this.props.repo ? false : true}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={this.props.repo}
                >
                  <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
                </a>
              </span>
            </Card.Title>
            <Card.Subtitle>{this.props.description}</Card.Subtitle>
          </Card.Body>
          <Accordion
            defaultActiveKey={DEFAULT_ACTIVE_KEY}
            flush
          >
            <Card className={classes.accordionCard}>
              <Accordion.Item eventKey="role">
                <Accordion.Header 
                  className={
                  this.state.activeSection === "role"
                    ? classes.accordionToggleActive
                    : classes.accordionToggle
                }>
                  <b>My Role</b>
                </Accordion.Header>
                <Accordion.Body>
                  {this.props.role}
                </Accordion.Body>
              </Accordion.Item>
            </Card>
            <Card className={classes.accordionCard}>
              <Accordion.Button
                as={Card.Header}
                eventKey="tech"
                className={
                  this.state.activeSection === "tech"
                    ? classes.accordionToggleActive
                    : classes.accordionToggle
                }
              >
                <b>Technologies</b>
              </Accordion.Button>
              <Accordion.Collapse eventKey="tech">
                <Card.Body>
                  <Row>{techList}</Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card className={classes.accordionCard}>
              <Accordion.Button
                as={Card.Header}
                eventKey="awards"
                className={
                  this.state.activeSection === "awards"
                    ? classes.accordionToggleActive
                    : classes.accordionToggle
                }
              >
                <b>Awards</b>
              </Accordion.Button>
              <Accordion.Collapse eventKey="awards">
                <Card.Body>
                  <Col>{awardsList}</Col>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card>
      </div>
    );
  }
}
