import React, { Component } from "react";
import axios from "axios";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import "./Responsibilities.css";

export class ResponsibilitiesForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.handleExtra();
  };
  render() {
    const { values, handleChangeResp, handleAdd } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Positions of Responsibility"></AppBar>
          <br />
          <br />
          {values.responsibilities.map((val, idx) => {
            let postId = `post-${idx}`,
              placeId = `place-${idx}`;
            return (
              <form onChange={handleChangeResp}>
                <div key={idx} className="field-resp">
                  <input
                    type="input"
                    name={postId}
                    data-id={idx}
                    id={postId}
                    value={values.responsibilities[idx].post}
                    className="post"
                    placeholder="Post"
                    autoComplete="off"
                    required
                  />
                  <label htmlFor={postId} className="form__label-post">
                    Post
                  </label>
                  &nbsp;&nbsp;
                  <input
                    type="input"
                    name={placeId}
                    data-id={idx}
                    id={placeId}
                    value={values.responsibilities[idx].place}
                    className="place"
                    placeholder="Company"
                    autoComplete="off"
                    required
                  />
                  <label
                    htmlFor={placeId}
                    className="form__label-place"
                    style={{ marginLeft: "246px" }}
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

export default ResponsibilitiesForm;
