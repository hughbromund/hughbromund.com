import React, { Component } from "react";

// import { TEXT_COLOR } from "../../constants/Constants";

import classes from "./Projects.module.css";
import ProjectCard from "./ProjectCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Projects extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          <strong>Projects</strong>
          <hr />
        </h1>
        <div className={classes.cards}>
          <Row xs={1} md={2} lg={2} xl={2} className={classes.projectsRow}>
            <Col>
              <ProjectCard
                name="DubbClub"
                description="A Sports Prediction website created as a team project, Dubb Club brings sports data from multiple leagues together onto a single website"
                role="I worked on the frontend of Dubb Club, including the login system, account page, standings page, and game info cards. I also built the CI/CD pipeline that deployed Dubb Club to Google Cloud App Engine"
                techNames={[
                  "React",
                  "Bootstrap",
                  "JavaScript",
                  "node",
                  "HTML",
                  "CSS",
                  "npm",
                ]}
                techCodes={[
                  "react",
                  "bootstrap",
                  "js",
                  "node",
                  "html5",
                  "css3-alt",
                  "npm",
                ]}
                repo="https://github.com/hughbromund/DubbClub"
                demo="https://dubb.club"
              />
            </Col>
            <Col>
              <ProjectCard
                name="FINEX"
                description="A team based project to build a website that helps track
                  spending and stock information"
                role="I created the initial designs and then
                  worked on the frontend team to bring those designs to life. I
                  specifically worked on the design and functionality
                  of the budgeting feature. Additionally, I took on the task of
                  hosting the website once it was completed."
                techNames={[
                  "React",
                  "Bootstrap",
                  "JavaScript",
                  "node",
                  "HTML",
                  "CSS",
                  "npm",
                ]}
                techCodes={[
                  "react",
                  "bootstrap",
                  "js",
                  "node",
                  "html5",
                  "css3-alt",
                  "npm",
                ]}
                repo="https://github.com/hughbromund/FINEX"
                demo="https://finex.money"
              />
            </Col>
            <Col>
              <ProjectCard
                name="Justifi"
                description="In an increasingly divided world, Justifi is an app that allows users to share and discuss their opinions in a civil and public manner."
                role="I created the frontend of our service using SwiftUI. I created all the major pages and wrote the code that handled the logic on the frontend. I also created our video recording and uploading system."
                techNames={[
                  "React",
                  "Swift",
                  "JavaScript",
                  "node",
                  "HTML",
                  "CSS",
                  "npm",
                ]}
                techCodes={[
                  "react",
                  "swift",
                  "js",
                  "node",
                  "html5",
                  "css3-alt",
                  "npm",
                ]}
                awardsNames={["2nd Place Overall - BoilerMake VIII"]}
                awardsLinks={["https://devpost.com/software/justifi"]}
                repo="https://github.com/hughbromund/Justifi"
                demo="https://justifiapp.com/"
              />
            </Col>
            <Col>
              <ProjectCard
                name="StarStats"
                description="An iOS app that displays player stats from the game BrawlStars"
                role="I worked on a number of different components for this project. My first job was building the backend for our app. I built the backend using NodeJS and hosted it in Google Cloud. I then moved on to creating the trophy graphing system and our persistent data system."
                techNames={["Swift", "JavaScript", "node", "Sketch"]}
                techCodes={["swift", "js", "node", "sketch"]}
                repo="https://github.com/BrawlStats-Purdue/BrawlStats"
                awardsNames={["Best Design - 2020 CodePath National Demo Day"]}
                awardsLinks={[
                  "https://blog.codepath.org/codepath-hosts-first-national-virtual-demo-day/",
                ]}
              />
            </Col>
            <Col>
              <ProjectCard
                name="Market Go Brr"
                description="A web app that shows the looks for correlation between a twitter account and changes in the stock market. Entry for VandyHacks VII."
                role="I designed and built the frontend. I also created an automatic CI/CD pipeline that allowed the project to be built and deployed in seconds."
                techNames={[
                  "React",
                  "JavaScript",
                  "node",
                  "HTML",
                  "CSS",
                  "npm",
                  "Google Cloud",
                ]}
                techCodes={[
                  "react",
                  "js",
                  "node",
                  "html5",
                  "css3-alt",
                  "npm",
                  "google",
                ]}
                repo="https://github.com/hughbromund/MarketGoBrr"
                demo="https://marketgobrr.com/"
                awardsNames={["Finalist (Top 4) - VandyHacks VII"]}
                awardsLinks={["https://devpost.com/software/marketgobrr"]}
              />
            </Col>
            <Col>
              <ProjectCard
                name="HughBromund.com"
                description="My personal Portfolio website."
                role="I designed and built my personal website from scratch. I realized that template sites weren't letting me create the design I wanted so I decided to make my own design."
                techNames={[
                  "React",
                  "Bootstrap",
                  "JavaScript",
                  "node",
                  "HTML",
                  "CSS",
                  "npm",
                ]}
                techCodes={[
                  "react",
                  "bootstrap",
                  "js",
                  "node",
                  "html5",
                  "css3-alt",
                  "npm",
                ]}
                repo="https://github.com/hughbromund/hughbromund.github.io"
                demo="https://hughbromund.com"
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
