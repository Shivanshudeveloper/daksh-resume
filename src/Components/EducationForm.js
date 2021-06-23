import React, { Component } from "react";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import "./EducationForm.css";

export class EducationForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.handleCourse();
  };
  back = (e) => {
    e.preventDefault();
    this.props.handleTraining();
  };
  render() {
    const { values, handleChangeEducation, handleAdd } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Education Details"></AppBar>
          <br />
          <br />
          {values.education.map((val, idx) => {
            let classId = `class-${idx}`,
              yearId = `class-${idx}`,
              schoolId = `school-${idx}`,
              marksId = `marks-${idx}`;
            return (
              <form onChange={handleChangeEducation}>
                <div key={idx} className="field-edu">
                  <input
                    type="text"
                    name={classId}
                    data-id={idx}
                    id={classId}
                    value={values.education[idx].class}
                    className="class"
                    placeholder="Qualification"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor={classId} className="form__label-class">
                    Qualification
                  </label>

                  <br />

                  <input
                    type="text"
                    name={yearId}
                    data-id={idx}
                    id={yearId}
                    value={values.education[idx].year}
                    className="year"
                    placeholder="Qualification Year"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor={yearId}
                    className="form__label-year"
                    style={{ marginTop: "55px" }}
                  >
                    Qualification Year
                  </label>

                  <br />

                  <input
                    type="text"
                    name={schoolId}
                    data-id={idx}
                    id={schoolId}
                    value={values.education[idx].school}
                    className="school"
                    placeholder="Institute"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor={schoolId}
                    className="form__label-school"
                    style={{ marginTop: "110px" }}
                  >
                    Institute
                  </label>

                  <br />

                  <input
                    type="text"
                    name={marksId}
                    data-id={idx}
                    id={marksId}
                    value={values.education[idx].marks}
                    className="marks"
                    placeholder="CGPA"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor={marksId}
                    className="form__label-marks"
                    style={{ marginTop: "170px" }}
                  >
                    CGPA
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
      </MuiThemeProvider>
    );
  }
}

export default EducationForm;
