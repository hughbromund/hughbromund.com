import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
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

   CustomAccordionHeader({ children, eventKey }) {
   const decoratedOnClick = useAccordionButton(eventKey);
  
    return (
      <Card.Body className={classes.accordionHeader} onClick={decoratedOnClick}>
        <Card.Subtitle>
          {children}
        </Card.Subtitle>
      </Card.Body>
    );
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
                style={{textDecoration: "None"}}
              >
                Demo <FontAwesomeIcon size="xs" icon="fa-solid fa-arrow-up-right-from-square" />
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
            defaultActiveKey={DEFAULT_ACTIVE_KEY} flush
          >
            <Card className={classes.accordionCard}>
              <Accordion.Item eventKey="role">
                <this.CustomAccordionHeader eventKey="role">
                  <b>My Role</b>
                </this.CustomAccordionHeader>
                <Accordion.Body className={classes.accordionBody}>
                  {this.props.role}
                </Accordion.Body>
              </Accordion.Item>
            </Card>
            <Card className={classes.accordionCard}>
              <Accordion.Item eventKey="tech">
                <this.CustomAccordionHeader eventKey="tech">
                  <b>Technologies</b>
                </this.CustomAccordionHeader>
                <Accordion.Body className={classes.accordionBody}>
                  <Row>{techList}</Row>
                </Accordion.Body>
              </Accordion.Item>
            </Card>
            <Card className={classes.accordionCard}>
              <Accordion.Item eventKey="awards" className={classes.accordionItem}>
              <this.CustomAccordionHeader eventKey="awards">
                  <b>Awards</b>
                </this.CustomAccordionHeader>
                <Accordion.Body className={classes.accordionBody}>
                <Col>{awardsList}</Col>
              </Accordion.Body>
              </Accordion.Item>
            </Card>
          </Accordion>
        </Card>
      </div>
    );
  }
}
