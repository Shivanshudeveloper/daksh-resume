import React, { Component } from "react";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import "./CoursesForm.css";

export class CoursesForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.handleAward();
  };
  back = (e) => {
    e.preventDefault();
    this.props.handleEdu();
  };
  render() {
    const { values, handleChangeCourses, handleAdd } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Course Information"></AppBar>
          <br />
          <br />
          {values.courses.map((val, idx) => {
            let titleId = `title-${idx}`,
              descId = `desc-${idx}`;
            return (
              <form onChange={handleChangeCourses}>
                <div key={idx} className="field-course">
                  <input
                    type="input"
                    name={titleId}
                    data-id={idx}
                    id={titleId}
                    value={values.courses[idx].title}
                    className="title"
                    placeholder="Course"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor={titleId} class="form__label-title">
                    Title
                  </label>

                  <br />

                  <input
                    type="input"
                    name={descId}
                    data-id={idx}
                    id={descId}
                    value={values.courses[idx].desc}
                    className="desc"
                    placeholder="Description"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor={descId}
                    class="form__label-desc"
                    style={{ marginTop: "55px" }}
                  >
                    Description
                  </label>

                  <IconButton onClick={handleAdd}>
                    <AddIcon />
                  </IconButton>
                </div>
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
      </MuiThemeProvider>
    );
  }
}

export default CoursesForm;
