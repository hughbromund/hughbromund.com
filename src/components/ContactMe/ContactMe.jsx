import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import classes from "./ContactMe.module.css";

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
            Email{" "}
            <span role="img" aria-label="e-mail">
              ✉️
            </span>
          </Button>
        </div>
      </div>
    );
  }
}
