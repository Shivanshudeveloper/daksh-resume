import React, { Component } from "react";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import "./InterestsForm.css";

export class InterestsForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.handleSkill();
  };
  back = (e) => {
    e.preventDefault();
    this.props.handleAbout();
  };
  render() {
    const { values, handleChangeInterest, handleAdd } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Write your Interests"></AppBar>
          <br />
          <br />
          {values.interests.map((val, idx) => {
            let interestId = `interest-${idx}`;
            return (
              <form onChange={handleChangeInterest}>
                <div key={idx} className="field">
                  <input
                    type="input"
                    name={interestId}
                    data-id={idx}
                    id={interestId}
                    value={values.interests[idx].interest}
                    className="interest"
                    placeholder="Interest"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor={interestId} className="form__label">
                    Interest
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

export default InterestsForm;
