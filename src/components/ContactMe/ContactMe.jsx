import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import classes from "./ContactMe.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ContactMe extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          <strong>Get In Touch</strong>
          <hr />
        </h1>
        <div className={classes.inner}>
          <h3>Interested in Talking?</h3>
          <Button href="mailto:hugh@bromund.net">
            Email <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </Button>
        </div>
      </div>
    );
  }
}
