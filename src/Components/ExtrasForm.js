import React, { Component } from "react";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import "./ExtrasForm.css";

export class ExtrasForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.handleResp();
  };
  back = (e) => {
    e.preventDefault();
    this.props.handleAward();
  };
  render() {
    const { values, handleChangeExtras, handleAdd } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Extra Curricular Activities"></AppBar>
          <br />
          <br />
          {values.extras.map((val, idx) => {
            let titleId = `title-${idx}`;
            return (
              <form onChange={handleChangeExtras}>
                <div key={idx} className="field-extra">
                  <input
                    type="text"
                    name={titleId}
                    data-id={idx}
                    id={titleId}
                    value={values.extras[idx].title}
                    className="title"
                    placeholder="Interest"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor={titleId} className="form__label">
                    Title
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

export default ExtrasForm;
