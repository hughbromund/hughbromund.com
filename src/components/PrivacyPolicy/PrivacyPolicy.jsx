import React, { Component } from 'react'

import classes from "./PrivacyPolicy.module.css";


export default class PrivacyPolicy extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          HughBromund.com Privacy Policy
        </h1>
        <p>This website does not collect any user information of any kind. The full  <a href="https://github.com/hughbromund/hughbromund.com">open source code</a> can be viewed and verified.</p>
        <h1 className={classes.title}>
          JumboScoreboard Privacy Policy
        </h1>
        <p>The JumboScoreboard iOS app does not collect any user information of any kind. The app does not connect to the internet and no data is transmitted from the app.</p>
      </div>
    )
  }
}
