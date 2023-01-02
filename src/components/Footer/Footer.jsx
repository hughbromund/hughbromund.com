import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", paddingBottom: "2%" }}>
        Designed and Built with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by Hugh Bromund
        <br />
        <a href="https://github.com/hughbromund/hughbromund.github.io">Open Source Website Source Code</a> -
        Hosted by <a href="https://railway.app/">Railway.app</a>
      </div>
    );
  }
}
