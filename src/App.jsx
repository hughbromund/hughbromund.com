import React, { Component } from "react";
import classes from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
// import logo from './logo.svg';
// import Routes from "./routing/Routes";
import HomePage from "./components/HomePage/HomePage";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
// import { render } from "@testing-library/react";

// Initialization of Fontawesome Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab);
library.add(fas);

// Color Pallet https://colorhunt.co/palette/15697

class App extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.navContainer}>
          <NavigationBar />
        </div>
        <div className={classes.bodyDiv}>
          <HomePage id="home" />
          <div id="projects">
            <Projects />
          </div>
          <div id="about">
            <AboutMe />
          </div>
          <div id="contact">
            <ContactMe />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
