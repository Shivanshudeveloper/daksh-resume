import React, { Component } from "react";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import "./SkillsForm.css";

export class SkillsForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.handleProject();
  };
  back = (e) => {
    e.preventDefault();
    this.props.handleInterest();
  };
  render() {
    const { values, handleChangeSkill, handleAdd } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter your Skills"></AppBar>
          <br />
          <br />
          {values.skills.map((val, idx) => {
            let skillId = `skill-${idx}`,
              profId = `proficiency-${idx}`;
            return (
              <form onChange={handleChangeSkill}>
                <div key={idx} className="field-skill">
                  <input
                    type="text"
                    name={skillId}
                    data-id={idx}
                    id={skillId}
                    value={values.skills[idx].name}
                    className="name"
                    placeholder="Skill"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor={skillId} className="form__label-name">
                    Skill
                  </label>
                  &nbsp;&nbsp;
                  <input
                    type="text"
                    name={profId}
                    data-id={idx}
                    id={profId}
                    value={values.skills[idx].proficiency}
                    className="proficiency"
                    placeholder="Proficiency"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor={profId}
                    className="form__label-prof"
                    style={{ marginLeft: "226px" }}
                  >
                    Proficiency
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

export default SkillsForm;
