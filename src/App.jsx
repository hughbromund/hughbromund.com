import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import classes from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./components/HomePage/HomePage";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

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
      <Router>
        <div className={classes.container}>
          <div className={classes.navContainer}>
            <NavigationBar />
          </div>
          <div className={classes.bodyDiv}>
            <Routes>
              <Route path="/" element={ 
                <div>          
                  <div id="home">
                    <HomePage />
                  </div>
                  <div id="projects">
                    <Projects />
                  </div>
                  <div id="about">
                    <AboutMe />
                  </div>
                  <div id="contact">
                    <ContactMe />
                </div>  
              </div>  
            } />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
