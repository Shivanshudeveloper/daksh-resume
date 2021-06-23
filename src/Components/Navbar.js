import React, { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import FontAwesome from "react-fontawesome";
import "./Navbar.css";

export class NavbarPage extends Component {
  render() {
    const {
      step,
      values,
      handleInterest,
      handleSkill,
      handleProject,
      handleTraining,
      handleEducation,
      handleCourse,
      handleAward,
      handleExtra,
      handleResp,
    } = this.props;
    return (
      <div>
        <br />
        <header id="header" class="d-flex flex-column justify-content-center">
          <nav id="navbar" class="navbar nav-menu">
            <ul>
              <li>
                <p
                  onClick={handleInterest}
                  class={
                    values.activeInterest
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                >
                  <i class="fa fa-code"></i> <span>Interests</span>
                </p>
              </li>
              <li>
                <p
                  onClick={handleSkill}
                  class={
                    values.activeSkill
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                >
                  <i class="fa fa-laptop"></i> <span>Skills</span>
                </p>
              </li>
              <li>
                <p
                  onClick={handleProject}
                  class={
                    values.activeProject
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                >
                  <i class="fa fa-tasks"></i> <span>Projects</span>
                </p>
              </li>
              <li>
                <p
                  onClick={handleTraining}
                  class={
                    values.activeTraining
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                >
                  <i class="fa fa-book"></i> <span>Training</span>
                </p>
              </li>
              <li>
                <p
                  onClick={handleEducation}
                  class={
                    values.activeEdu
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                >
                  <i class="fa fa-graduation-cap"></i> <span>Education</span>
                </p>
              </li>
              <li>
                <p
                  onClick={handleCourse}
                  class={
                    values.activeCourse
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                >
                  <i class="fa fa-university"></i> <span>Courses</span>
                </p>
              </li>
              <li>
                <p
                  onClick={handleAward}
                  class={
                    values.activeAward
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                >
                  <i class="fa fa-trophy"></i> <span>Awards</span>
                </p>
              </li>
              <li>
                <p
                  onClick={handleExtra}
                  class={
                    values.activeExtra
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                >
                  <i class="fa fa-camera-retro"></i>{" "}
                  <span>Extra-curricular</span>
                </p>
              </li>
              <li>
                <p
                  onClick={handleResp}
                  class={
                    values.activeResp
                      ? "nav-link scrollto active"
                      : "nav-link scrollto"
                  }
                >
                  <i class="fa fa-black-tie"></i> <span>Responsibilities</span>
                </p>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default NavbarPage;
