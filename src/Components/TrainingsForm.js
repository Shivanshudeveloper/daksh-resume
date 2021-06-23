import React, { Component } from "react";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import "./TrainingsForm.css";

export class TrainingsForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.handleEdu();
  };
  back = (e) => {
    e.preventDefault();
    this.props.handleProject();
  };
  render() {
    const { values, handleChangeTrainings, handleAdd } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Training Details"></AppBar>
          <br />
          <br />
          {values.trainings.map((val, idx) => {
            let nameId = `name-${idx}`,
              startTimeId = `startTime-${idx}`,
              endTimeId = `endTime-${idx}`,
              descriptionId = `description-${idx}`;
            return (
              <form onChange={handleChangeTrainings}>
                <div key={idx} class="field-train">
                  <input
                    type="input"
                    name={nameId}
                    data-id={idx}
                    id={nameId}
                    value={values.trainings[idx].name}
                    className="name"
                    placeholder="Title"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor={nameId} className="form__label-name">
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
                        value={values.trainings[idx].startTime}
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
                        value={values.trainings[idx].time}
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
                    name={descriptionId}
                    data-id={idx}
                    id={descriptionId}
                    value={values.trainings[idx].description}
                    className="description"
                    placeholder="Description"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor={descriptionId}
                    className="form__label-desc"
                    style={{ marginTop: "130px" }}
                  >
                    Description
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
          Leave the end date unchanged, if training is ongoing.
        </p>
      </MuiThemeProvider>
    );
  }
}

export default TrainingsForm;
