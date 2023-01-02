import React, { Component } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import classes from "./ExperienceCard.module.css";

export default class ExperienceCard extends Component {
  render() {
    var list = [];
    list.push(
      <ListGroup.Item variant="primary" className={classes.ListGroupItemHeader}>
        <b>{this.props.responsibilitiesTitle}</b>
      </ListGroup.Item>
    );
    for (var i = 0; i < this.props.responsibilities.length; i++) {
      list.push(
        <ListGroup.Item className={classes.ListGroupItem}>
          {this.props.responsibilities[i]}
        </ListGroup.Item>
      );
    }

    return (
      <div>
        <Card className={classes.ExperienceCard}>
          <Card.Body>
            <Card.Title>
              <strong>{this.props.company}</strong> |{" "}
              <span className={classes.jobTitle}>{this.props.position}</span>
            </Card.Title>
            <Card.Subtitle>
              <Row xs={1} sm={2}>
                <Col>{this.props.location}</Col>
                <Col className={classes.dateCol}>{this.props.dates}</Col>
              </Row>
            </Card.Subtitle>
            <hr />
            <Card.Text>{this.props.about}</Card.Text>
          </Card.Body>
          <ListGroup variant="flush">{list}</ListGroup>
        </Card>
      </div>
    );
  }
}
