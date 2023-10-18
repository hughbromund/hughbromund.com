import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", paddingBottom: "2%" }}>
        Designed and Built with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by Hugh Bromund in Seattle, WA
        <br />
        <a href="https://github.com/hughbromund/hughbromund.com">
          Open Source Website Source Code
        </a>{" "}
        | Hosted by <a href="https://cloud.google.com/">Google Cloud</a> | Version:{" "}
        {import.meta.env.REACT_APP_VERSION
          ? process.env.REACT_APP_VERSION
          : "Local"}
      </div>
    );
  }
}
