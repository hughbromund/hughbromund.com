import React, { Component } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./AboutMe.module.css";
import Card from "react-bootstrap/Card";

import ExperienceCard from "../ExperienceCard/ExperienceCard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class AboutMe extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.title}>
          <strong>About Me</strong>
          <hr />
        </h1>
        <br />
        <div className={classes.inner}>
          <h2>
            <strong>Skills</strong>
          </h2>

          <Row xs={1} sm={1} md={2}>
            <Col>
              <Card className={classes.card}>
                <Card.Body>
                  <Card.Title>
                    <strong>Programming Languages</strong>
                  </Card.Title>
                  <hr />
                  <Row>
                    <Col>
                      <Row className={classes.techCol}>
                        <FontAwesomeIcon icon={["fab", "java"]} size="2x" />
                      </Row>
                      <Row className={classes.techCol}>Java</Row>
                    </Col>
                    <Col>
                      <Row className={classes.techCol}>
                        <FontAwesomeIcon icon={["fab", "js"]} size="2x" />
                      </Row>
                      <Row className={classes.techCol}>JavaScript</Row>
                    </Col>
                    <Col>
                      <Row className={classes.techCol}>
                        <FontAwesomeIcon icon={["fab", "python"]} size="2x" />
                      </Row>
                      <Row className={classes.techCol}>Python</Row>
                    </Col>
                    <Col>
                      <Row className={classes.techCol}>
                        <FontAwesomeIcon icon={["fab", "swift"]} size="2x" />
                      </Row>
                      <Row className={classes.techCol}>Swift</Row>
                    </Col>
                    <Col>
                      <Row className={classes.techCol}>
                        <FontAwesomeIcon icon={["fab", "html5"]} size="2x" />
                      </Row>
                      <Row className={classes.techCol}>HTML</Row>
                    </Col>
                    <Col>
                      <Row className={classes.techCol}>
                        <FontAwesomeIcon icon={["fab", "css3-alt"]} size="2x" />
                      </Row>
                      <Row className={classes.techCol}>CSS</Row>
                    </Col>
                    <Col>
                      <Row className={classes.techCol}>C/C++</Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={classes.card}>
                <Card.Body>
                  <Card.Title>
                    <strong>Technologies</strong>
                  </Card.Title>
                  <hr />
                  <Row>
                    <Col>
                      <Row className={classes.techCol}>
                        <FontAwesomeIcon icon={["fab", "react"]} size="2x" />
                      </Row>
                      <Row className={classes.techCol}>React</Row>
                    </Col>
                    <Col>
                      <Row className={classes.techCol}>
                        <FontAwesomeIcon icon={["fab", "node"]} size="2x" />
                      </Row>
                      <Row className={classes.techCol}>node</Row>
                    </Col>
                    <Col>
                      <Row className={classes.techCol}>
                        <FontAwesomeIcon icon={["fab", "npm"]} size="2x" />
                      </Row>
                      <Row className={classes.techCol}>npm</Row>
                    </Col>
                    <Col>
                      <Row className={classes.techCol}>
                        <FontAwesomeIcon
                          icon={["fab", "bootstrap"]}
                          size="2x"
                        />
                      </Row>
                      <Row className={classes.techCol}>Bootstrap</Row>
                    </Col>
                    <Col>
                      <Row className={classes.techCol}>
                        <FontAwesomeIcon icon={["fab", "ubuntu"]} size="2x" />
                      </Row>
                      <Row className={classes.techCol}>Linux</Row>
                    </Col>
                    <Col>
                      <Row className={classes.techCol}>
                        <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                      </Row>
                      <Row className={classes.techCol}>GitHub CI/CD</Row>
                    </Col>
                    <Col>
                      <Row className={classes.techCol}>
                        Google Cloud Platform
                      </Row>
                    </Col>
                    <Col>
                      <Row className={classes.techCol}>Electron.js</Row>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <h1 className={classes.title}>
          <strong>Education & Experience</strong>
          <hr />
        </h1>
        <div className={classes.inner}>
          <h2>
            <strong>Education</strong>
          </h2>
          <ExperienceCard
            company="Purdue University"
            position="B.S. Computer Science Honors"
            location="West Lafayette, IN"
            dates="2022 Graduation"
            about="GPA: 3.72 / 4.00 | Semester Honors and Deans List"
            responsibilities={[
              "Computer Architecture (CS 25000)",
              "Data Structures and Algorithms (CS 25100)",
              "Fundamentals of Computer Science (CS 18200)",
              "Problem Solving and Object-Oriented Programming ( CS 18000)",
              "Programming in C (CS 24000)",
              "Software Engineering I (CS 30700)",
              "Systems Programming (CS 25200)",
              "iOS Development In Swift (CS 49000-iOS)",
            ]}
            responsibilitiesTitle="Coursework"
          />
          <div id="experience">
            <h2>
              <strong>Experience</strong>
            </h2>
            <br />
            <Row
              xs={1}
              sm={1}
              md={2}
              lg={3}
              xl={3}
              className={classes.experienceRow}
            >
              <Col>
                <ExperienceCard
                company="Dropbox"
                position="Software Engineer Intern"
                location="Remote"
                about="Working on the Product Growth Team at Dropbox. Creating experiments for Dropbox.com and Dropbox desktop app."
                dates="May 2021 - August 2021"
                responsibilities={[
                  "Build Experimental Features from Spec",
                  "Coordinate new features between multiple team surfaces",
                  "Ramp and monitor rollout of new experiments",
                  "Monitor results of experiment"
                ]}
                responsibilitiesTitle="Responsibilities"
                />
              </Col>
              <Col>
                <ExperienceCard
                  company="LincLogix LLC"
                  position="Software Developer Intern"
                  location="Indianapolis, IN"
                  about="Working with the LincLogix Engineering Team for the 2020 summer. Creating applications that help save LincLogix employees time and automate repetitive processes."
                  dates="May 2020 - April 2021"
                  responsibilities={[
                    "Built data processing and validation tool that automates over 15 hours of work per month with Python",
                    "Built data aggregation web app that saves 5+ hours of work per week with React, NodeJS, and Express",
                    "Modernized company website with new responsive design using React (viewable at LincLogix.com)",
                  ]}
                  responsibilitiesTitle="Responsibilities"
                />
              </Col>
              <Col>
                <ExperienceCard
                  company="Purdue University"
                  location="West Lafayette, IN"
                  position="Teaching Assistant"
                  about="Assisted and helped teach 40+ students in the Fundamentals of C class"
                  dates="Jan. 2020 - Dec. 2020"
                  responsibilities={[
                    "Work with students one-on-one to help them with all aspects of the class",
                    "Grade Code-Standard for student homework submissions",
                  ]}
                  responsibilitiesTitle="Responsibilities"
                />
              </Col>
              <Col>
                <ExperienceCard
                  company="iD Tech Camps"
                  location="West Lafayette, IN"
                  position="Lead Instructor"
                  about="I am the Lead Instructor for iD Camps during the 2019 summer. I worked at Purdue University and University of Alabama Birmingham"
                  dates="May 2019 - July 2019"
                  responsibilities={[
                    "Taught classes focusing on machine learning and artificial intelligence to 100+ students",
                    "Named the best instructor in the “Teaching”, “Leadership”, and “Organization” categories",
                    "Monitored Progress of all students and made sure every student completed the curriculum",
                  ]}
                  responsibilitiesTitle="Responsibilities"
                />
              </Col>
              <Col hidden>
                <ExperienceCard
                  company="Brebeuf Jesuit Preparatory School"
                  location="Indianapolis, IN"
                  position="IT Summer Intern"
                  about="I am the summer intern for my high school's IT department"
                  dates="May 2016 - Aug. 2017"
                  responsibilities={[
                    "Help teachers setup and use new technology in the school",
                    "Run new CAT6 Ethernet cables throughout the building",
                    "Setup and maintain the Brebeuf Jesuit Maker Space",
                  ]}
                  responsibilitiesTitle="Responsibilities"
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
