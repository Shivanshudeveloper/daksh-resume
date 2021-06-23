import React, { Component } from "react";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import "./AwardsForm.css";

export class CoursesForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.handleExtra();
  };
  back = (e) => {
    e.preventDefault();
    this.props.handleCourse();
  };
  render() {
    const { values, handleChangeAwards, handleAdd } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Award Details"></AppBar>
          <br />
          <br />
          {values.awards.map((val, idx) => {
            let titleId = `title-${idx}`,
              placeId = `place-${idx}`;
            return (
              <form onChange={handleChangeAwards}>
                <div key={idx} className="field-award">
                  <input
                    type="input"
                    name={titleId}
                    data-id={idx}
                    id={titleId}
                    value={values.awards[idx].title}
                    className="title"
                    placeholder="Award"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor={titleId} className="form__label-award">
                    Award
                  </label>
                  &nbsp;&nbsp;
                  <input
                    type="input"
                    name={placeId}
                    data-id={idx}
                    id={placeId}
                    value={values.awards[idx].place}
                    className="place"
                    placeholder="Company"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor={placeId}
                    className="form__label-place"
                    style={{ marginLeft: "240px" }}
                  >
                    Company
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
