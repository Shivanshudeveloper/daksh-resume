import React, { Component } from "react";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import "./ProjectsForm.css";

export class ProjectsForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.handleTraining();
  };
  back = (e) => {
    e.preventDefault();
    this.props.handleSkill();
  };
  render() {
    const { values, handleChangeProjects, handleAdd } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Project Details"></AppBar>
          <br />
          <br />
          {values.projects.map((val, idx) => {
            let titleId = `title-${idx}`,
              startTimeId = `startTime-${idx}`,
              endTimeId = `endTime-${idx}`,
              themeId = `theme-${idx}`,
              technologyId = `technology-${idx}`,
              teamSizeId = `teamSize-${idx}`,
              roleId = `role-${idx}`;
            return (
              <form onChange={handleChangeProjects}>
                <div key={idx} className="field-project">
                  <input
                    type="input"
                    name={titleId}
                    data-id={idx}
                    id={titleId}
                    value={values.projects[idx].title}
                    className="title"
                    placeholder="Title"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor={titleId} className="form__label-title">
                    Title
                  </label>

                  <div style={{ display: "flex" }}>
                    <div>
                      <label
                        htmlFor={startTimeId}
                        className="form__label-stime"
                        style={{ display: "table-cell" }}
                      >
                        Start Date
                      </label>
                      <input
                        style={{ display: "block" }}
                        type="date"
                        name={startTimeId}
                        data-id={idx}
                        id={startTimeId}
                        value={values.projects[idx].startTime}
                        className="startTime"
                        placeholder="Start Date"
                        autoComplete="off"
                        required
                      />
                    </div>
                    &nbsp;&nbsp;&nbsp;
                    <div>
                      <label
                        htmlFor={endTimeId}
                        className="form__label-etime"
                        style={{ display: "table-cell" }}
                      >
                        End Date
                      </label>
                      <input
                        style={{ display: "block" }}
                        type="date"
                        name={endTimeId}
                        data-id={idx}
                        id={endTimeId}
                        value={values.projects[idx].time}
                        className="endTime"
                        placeholder="End Date"
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <br />

                  <input
                    type="input"
                    name={themeId}
                    data-id={idx}
                    id={themeId}
                    value={values.projects[idx].theme}
                    className="theme"
                    placeholder="Theme"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor={themeId}
                    className="form__label-theme"
                    style={{ marginTop: "130px" }}
                  >
                    Description
                  </label>

                  <br />

                  <input
                    type="input"
                    name={technologyId}
                    data-id={idx}
                    id={technologyId}
                    value={values.projects[idx].technology}
                    className="technology"
                    placeholder="Technologies Used"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor={technologyId}
                    className="form__label-tech"
                    style={{ marginTop: "200px" }}
                  >
                    Technologied Used
                  </label>

                  <br />

                  <input
                    type="input"
                    name={teamSizeId}
                    data-id={idx}
                    id={teamSizeId}
                    value={values.projects[idx].teamSize}
                    className="teamSize"
                    placeholder="Team Size"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor={teamSizeId}
                    className="form__label-tsize"
                    style={{ marginTop: "250px" }}
                  >
                    Team Size
                  </label>

                  <br />

                  <input
                    type="input"
                    name={roleId}
                    data-id={idx}
                    id={roleId}
                    value={values.projects[idx].role}
                    className="role"
                    placeholder="My Role"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor={roleId}
                    className="form__label-role"
                    style={{ marginTop: "305px" }}
                  >
                    My Role
                  </label>

                  <IconButton onClick={handleAdd}>
                    <AddIcon />
                  </IconButton>
                </div>
                <br />
              </form>
            );
          })}
          <br />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            onClick={this.continue}
          />
          &nbsp;&nbsp;
          <RaisedButton label="Back" primary={false} onClick={this.back} />
        </React.Fragment>
        <br />
        <br />
        <p style={{ color: "#067ded" }}>
          Leave the end date unchanged, if project is ongoing.
        </p>
      </MuiThemeProvider>
    );
  }
}

export default ProjectsForm;
