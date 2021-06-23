import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import axios from "axios";
import { MuiThemeProvider } from "material-ui/styles";
import AppBar from "material-ui/AppBar";

export class EndView extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.handleResp();
  };
  continue = (e) => {
    e.preventDefault();
    const info = this.props.values;
    console.log(info);
    axios
      .post("http://localhost:3001", info)
      .then(() => console.log("Info Added", info))
      .catch((err) => {
        console.error(err);
      });
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm"></AppBar>
          <br />
          <br />
          <select
            id="dropdown"
            onChange={handleChange("template")}
            style={{
              border: "1px solid rgb(0, 188, 212)",
              width: "15%",
            }}
          >
            <option value="none" selected disabled hidden>
              Select an Option
            </option>
            <option value="1">Template 1</option>
            <option value="2">Template 2</option>
            <option value="3">Template 3</option>
            <option value="4">Template 4</option>
          </select>
          <br />
          <br />
          <RaisedButton
            label="Confirm"
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

export default EndView;
