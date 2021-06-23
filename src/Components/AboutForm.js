import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class AboutForm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.handleInterest();
  };
  render() {
    const { values, handleChange, handleImageChange, onFileUpload } =
      this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter these details"></AppBar>
          <TextField
            hintText="Enter your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstname")}
            defaultValue={values.firstname}
          />
          <br />
          <TextField
            hintText="Enter your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastname")}
            defaultValue={values.lastname}
          />
          <br />
          <TextField
            hintText="Link to Instagram"
            floatingLabelText="Instagram"
            onChange={handleChange("instagram")}
            defaultValue={values.instagram}
          />
          <br />
          <TextField
            hintText="Link to Fcebook"
            floatingLabelText="Facebook"
            onChange={handleChange("facebook")}
            defaultValue={values.facebook}
          />
          <br />
          <TextField
            hintText="Link to Twitter"
            floatingLabelText="Twitter"
            onChange={handleChange("twitter")}
            defaultValue={values.twitter}
          />
          <br />
          <TextField
            hintText="Link to Github"
            floatingLabelText="Github"
            onChange={handleChange("github")}
            defaultValue={values.github}
          />
          <br />

          <br />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default AboutForm;
