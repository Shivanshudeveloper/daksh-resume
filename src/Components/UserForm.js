import React, { Component } from "react";
import SkillsForm from "./SkillsForm";
import AboutForm from "./AboutForm";
import ProjectsForm from "./ProjectsForm";
import TrainingsForm from "./TrainingsForm";
import EducationForm from "./EducationForm";
import CoursesForm from "./CoursesForm";
import AwardsForm from "./AwardsForm";
import ExtrasForm from "./ExtrasForm";
import ResponsibilitiesForm from "./ResponsibilitiesForm";
import InterestsForm from "./InterestsForm";
import EndView from "./EndView";
import NavbarPage from "./Navbar";
import axios from "axios";

export class UserForm extends Component {
  state = {
    step: 1,
    firstname: "",
    lastname: "",
    instagram: "",
    facebook: "",
    twitter: "",
    github: "",
    image: null,
    interests: [{ interest: "" }],
    skills: [{ name: "", proficiency: "" }],
    projects: [
      {
        title: "",
        startTime: "",
        endTime: "",
        theme: "",
        technology: "",
        teamSize: "",
        role: "",
      },
    ],
    trainings: [
      {
        name: "",
        startTime: "",
        endTime: "",
        description: "",
      },
    ],
    education: [
      {
        class: "",
        school: "",
        marks: "",
        year: "",
      },
    ],
    courses: [
      {
        title: "",
        desc: "",
      },
    ],
    awards: [
      {
        title: "",
        place: "",
      },
    ],
    extras: [
      {
        title: "",
      },
    ],
    responsibilities: [
      {
        post: "",
        place: "",
      },
    ],
    template: "",
    activeInterest: false,
    activeSkill: false,
    activeProject: false,
    activeTraining: false,
    activeEdu: false,
    activeCourse: false,
    activeAward: false,
    activeExtra: false,
    activeResp: false,
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };

  handleChangeSkills = (e) => {
    if (["name", "proficiency"].includes(e.target.className)) {
      let skills = [...this.state.skills];
      skills[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ skills }, () => console.log(this.state.skills));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleAddSkills = (e) => {
    this.setState((prevState) => ({
      skills: [...prevState.skills, { name: "", proficiency: "" }],
    }));
  };

  handleChangeProjects = (e) => {
    if (
      [
        "title",
        "startTime",
        "endTime",
        "theme",
        "technology",
        "teamSize",
        "role",
      ].includes(e.target.className)
    ) {
      let projects = [...this.state.projects];
      projects[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ projects }, () => console.log(this.state.projects));
    } else {
      this.setState({ [e.target.title]: e.target.value });
    }
  };

  handleAddProjects = (e) => {
    this.setState((prevState) => ({
      projects: [
        ...prevState.projects,
        {
          title: "",
          startTime: "",
          endTime: "",
          theme: "",
          technology: "",
          teamSize: "",
          role: "",
        },
      ],
    }));
  };

  handleChangeTrainings = (e) => {
    if (
      ["name", "startTime", "endTime", "description"].includes(
        e.target.className
      )
    ) {
      let trainings = [...this.state.trainings];
      trainings[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ trainings }, () => console.log(this.state.trainings));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleAddTrainings = (e) => {
    this.setState((prevState) => ({
      trainings: [
        ...prevState.trainings,
        { name: "", startTime: "", endTime: "", description: "" },
      ],
    }));
  };

  handleChangeEducation = (e) => {
    if (["class", "year", "school", "marks"].includes(e.target.className)) {
      let education = [...this.state.education];
      education[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ education }, () => console.log(this.state.education));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleAddEducation = (e) => {
    this.setState((prevState) => ({
      education: [...prevState.education, { class: "", school: "", marks: "" }],
    }));
  };

  handleChangeCourses = (e) => {
    if (["title", "desc"].includes(e.target.className)) {
      let courses = [...this.state.courses];
      courses[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ courses }, () => console.log(this.state.courses));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleAddCourses = (e) => {
    this.setState((prevState) => ({
      courses: [...prevState.courses, { tite: "" }],
    }));
  };

  handleChangeAwards = (e) => {
    if (["title", "place"].includes(e.target.className)) {
      let awards = [...this.state.awards];
      awards[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ awards }, () => console.log(this.state.awards));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleAddAwards = (e) => {
    this.setState((prevState) => ({
      awards: [...prevState.awards, { title: "", place: "" }],
    }));
  };

  handleChangeExtras = (e) => {
    if (["title"].includes(e.target.className)) {
      let extras = [...this.state.extras];
      extras[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ extras }, () => console.log(this.state.extras));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleAddExtras = (e) => {
    this.setState((prevState) => ({
      extras: [...prevState.extras, { title: "" }],
    }));
  };

  handleChangeResp = (e) => {
    if (["post", "place"].includes(e.target.className)) {
      let responsibilities = [...this.state.responsibilities];
      responsibilities[e.target.dataset.id][e.target.className] =
        e.target.value;
      this.setState({ responsibilities }, () =>
        console.log(this.state.responsibilities)
      );
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleAddResp = (e) => {
    this.setState((prevState) => ({
      responsibilities: [
        ...prevState.responsibilities,
        { post: "", place: "" },
      ],
    }));
  };

  handleChangeInterests = (e) => {
    if (["interest"].includes(e.target.className)) {
      let interests = [...this.state.interests];
      interests[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ interests }, () => console.log(this.state.interests));
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  handleAddInterest = (e) => {
    this.setState((prevState) => ({
      interests: [...prevState.interests, { interest: "" }],
    }));
  };

  handleAbout = (e) => {
    const { step } = this.state;
    this.setState({
      step: 1,
    });
  };

  handleInterest = (e) => {
    const { step } = this.state;
    this.setState({
      step: 2,
      activeInterest: true,
      activeSkill: false,
      activeProject: false,
      activeTraining: false,
      activeEdu: false,
      activeCourse: false,
      activeAward: false,
      activeExtra: false,
      activeResp: false,
    });
  };

  handleSkill = (e) => {
    const { step } = this.state;
    this.setState({
      step: 3,
      activeInterest: false,
      activeSkill: true,
      activeProject: false,
      activeTraining: false,
      activeEdu: false,
      activeCourse: false,
      activeAward: false,
      activeExtra: false,
      activeResp: false,
    });
  };

  handleProject = (e) => {
    const { step } = this.state;
    this.setState({
      step: 4,
      activeInterest: false,
      activeSkill: false,
      activeProject: true,
      activeTraining: false,
      activeEdu: false,
      activeCourse: false,
      activeAward: false,
      activeExtra: false,
      activeResp: false,
    });
  };

  handleTraining = (e) => {
    const { step } = this.state;
    this.setState({
      step: 5,
      activeInterest: false,
      activeSkill: false,
      activeProject: false,
      activeTraining: true,
      activeEdu: false,
      activeCourse: false,
      activeAward: false,
      activeExtra: false,
      activeResp: false,
    });
  };

  handleEducation = (e) => {
    const { step } = this.state;
    this.setState({
      step: 6,
      activeInterest: false,
      activeSkill: false,
      activeProject: false,
      activeTraining: false,
      activeEdu: true,
      activeCourse: false,
      activeAward: false,
      activeExtra: false,
      activeResp: false,
    });
  };

  handleCourse = (e) => {
    const { step } = this.state;
    this.setState({
      step: 7,
      activeInterest: false,
      activeSkill: false,
      activeProject: false,
      activeTraining: false,
      activeEdu: false,
      activeCourse: true,
      activeAward: false,
      activeExtra: false,
      activeResp: false,
    });
  };

  handleAward = (e) => {
    const { step } = this.state;
    this.setState({
      step: 8,
      activeInterest: false,
      activeSkill: false,
      activeProject: false,
      activeTraining: false,
      activeEdu: false,
      activeCourse: false,
      activeAward: true,
      activeExtra: false,
      activeResp: false,
    });
  };

  handleExtra = (e) => {
    const { step } = this.state;
    this.setState({
      step: 9,
      activeInterest: false,
      activeSkill: false,
      activeProject: false,
      activeTraining: false,
      activeEdu: false,
      activeCourse: false,
      activeAward: false,
      activeExtra: true,
      activeResp: false,
    });
  };

  handleResp = (e) => {
    const { step } = this.state;
    this.setState({
      step: 10,
      activeInterest: false,
      activeSkill: false,
      activeProject: false,
      activeTraining: false,
      activeEdu: false,
      activeCourse: false,
      activeAward: false,
      activeExtra: false,
      activeResp: true,
    });
  };

  handleImageChange = (event) => {
    this.setState({ image: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  render() {
    const { step } = this.state;
    const {
      firstname,
      lastname,
      instagram,
      facebook,
      twitter,
      github,
      image,
      interests,
      skills,
      projects,
      trainings,
      education,
      courses,
      awards,
      extras,
      responsibilities,
      template,
      activeAward,
      activeCourse,
      activeEdu,
      activeExtra,
      activeInterest,
      activeProject,
      activeResp,
      activeSkill,
      activeTraining,
    } = this.state;
    const values = {
      firstname,
      lastname,
      instagram,
      facebook,
      twitter,
      github,
      image,
      interests,
      skills,
      projects,
      trainings,
      education,
      courses,
      awards,
      extras,
      responsibilities,
      template,
      activeAward,
      activeCourse,
      activeEdu,
      activeExtra,
      activeInterest,
      activeProject,
      activeResp,
      activeSkill,
      activeTraining,
    };
    switch (step) {
      case 1:
        return (
          <div id="about">
            <AboutForm
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              handleImageChange={this.handleImageChange}
              values={values}
              handleInterest={this.handleInterest}
            />
            <NavbarPage
              step={this.state.step}
              values={values}
              handleAbout={this.handleAbout}
              handleInterest={this.handleInterest}
              handleSkill={this.handleSkill}
              handleProject={this.handleProject}
              handleTraining={this.handleTraining}
              handleEducation={this.handleEducation}
              handleCourse={this.handleCourse}
              handleAward={this.handleAward}
              handleExtra={this.handleExtra}
              handleResp={this.handleResp}
            />
          </div>
        );
      case 2:
        return (
          <div id="interest">
            <InterestsForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChangeInterest={this.handleChangeInterests}
              handleAdd={this.handleAddInterest}
              values={values}
              handleAbout={this.handleAbout}
              handleSkill={this.handleSkill}
            />
            <NavbarPage
              step={this.state.step}
              values={values}
              handleAbout={this.handleAbout}
              handleInterest={this.handleInterest}
              handleSkill={this.handleSkill}
              handleProject={this.handleProject}
              handleTraining={this.handleTraining}
              handleEducation={this.handleEducation}
              handleCourse={this.handleCourse}
              handleAward={this.handleAward}
              handleExtra={this.handleExtra}
              handleResp={this.handleResp}
            />
          </div>
        );
      case 3:
        return (
          <div id="skill">
            <SkillsForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChangeSkill={this.handleChangeSkills}
              handleAdd={this.handleAddSkills}
              values={values}
              handleProject={this.handleProject}
              handleInterest={this.handleInterest}
            />
            <NavbarPage
              step={this.state.step}
              values={values}
              handleAbout={this.handleAbout}
              handleInterest={this.handleInterest}
              handleSkill={this.handleSkill}
              handleProject={this.handleProject}
              handleTraining={this.handleTraining}
              handleEducation={this.handleEducation}
              handleCourse={this.handleCourse}
              handleAward={this.handleAward}
              handleExtra={this.handleExtra}
              handleResp={this.handleResp}
            />
          </div>
        );
      case 4:
        return (
          <div id="project">
            <ProjectsForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChangeProjects={this.handleChangeProjects}
              handleAdd={this.handleAddProjects}
              values={values}
              handleTraining={this.handleTraining}
              handleSkill={this.handleSkill}
            />
            <NavbarPage
              step={this.state.step}
              values={values}
              handleAbout={this.handleAbout}
              handleInterest={this.handleInterest}
              handleSkill={this.handleSkill}
              handleProject={this.handleProject}
              handleTraining={this.handleTraining}
              handleEducation={this.handleEducation}
              handleCourse={this.handleCourse}
              handleAward={this.handleAward}
              handleExtra={this.handleExtra}
              handleResp={this.handleResp}
            />
          </div>
        );
      case 5:
        return (
          <div id="training">
            <TrainingsForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChangeTrainings={this.handleChangeTrainings}
              handleAdd={this.handleAddTrainings}
              values={values}
              handleEdu={this.handleEducation}
              handleProject={this.handleProject}
            />
            <NavbarPage
              step={this.state.step}
              values={values}
              handleAbout={this.handleAbout}
              handleInterest={this.handleInterest}
              handleSkill={this.handleSkill}
              handleProject={this.handleProject}
              handleTraining={this.handleTraining}
              handleEducation={this.handleEducation}
              handleCourse={this.handleCourse}
              handleAward={this.handleAward}
              handleExtra={this.handleExtra}
              handleResp={this.handleResp}
            />
          </div>
        );
      case 6:
        return (
          <div>
            <EducationForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChangeEducation={this.handleChangeEducation}
              handleAdd={this.handleAddEducation}
              values={values}
              handleCourse={this.handleCourse}
              handleTraining={this.handleTraining}
            />
            <NavbarPage
              step={this.state.step}
              values={values}
              handleAbout={this.handleAbout}
              handleInterest={this.handleInterest}
              handleSkill={this.handleSkill}
              handleProject={this.handleProject}
              handleTraining={this.handleTraining}
              handleEducation={this.handleEducation}
              handleCourse={this.handleCourse}
              handleAward={this.handleAward}
              handleExtra={this.handleExtra}
              handleResp={this.handleResp}
            />
          </div>
        );
      case 7:
        return (
          <div>
            <CoursesForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChangeCourses={this.handleChangeCourses}
              handleAdd={this.handleAddCourses}
              values={values}
              handleAward={this.handleAward}
              handleEdu={this.handleEducation}
            />
            <NavbarPage
              step={this.state.step}
              values={values}
              handleAbout={this.handleAbout}
              handleInterest={this.handleInterest}
              handleSkill={this.handleSkill}
              handleProject={this.handleProject}
              handleTraining={this.handleTraining}
              handleEducation={this.handleEducation}
              handleCourse={this.handleCourse}
              handleAward={this.handleAward}
              handleExtra={this.handleExtra}
              handleResp={this.handleResp}
            />
          </div>
        );
      case 8:
        return (
          <div>
            <AwardsForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChangeAwards={this.handleChangeAwards}
              handleAdd={this.handleAddAwards}
              values={values}
              handleExtra={this.handleExtra}
              handleCourse={this.handleCourse}
            />
            <NavbarPage
              step={this.state.step}
              values={values}
              handleAbout={this.handleAbout}
              handleInterest={this.handleInterest}
              handleSkill={this.handleSkill}
              handleProject={this.handleProject}
              handleTraining={this.handleTraining}
              handleEducation={this.handleEducation}
              handleCourse={this.handleCourse}
              handleAward={this.handleAward}
              handleExtra={this.handleExtra}
              handleResp={this.handleResp}
            />
          </div>
        );
      case 9:
        return (
          <div>
            <ExtrasForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChangeExtras={this.handleChangeExtras}
              handleAdd={this.handleAddExtras}
              values={values}
              handleResp={this.handleResp}
              handleAward={this.handleAward}
            />
            <NavbarPage
              step={this.state.step}
              values={values}
              handleAbout={this.handleAbout}
              handleInterest={this.handleInterest}
              handleSkill={this.handleSkill}
              handleProject={this.handleProject}
              handleTraining={this.handleTraining}
              handleEducation={this.handleEducation}
              handleCourse={this.handleCourse}
              handleAward={this.handleAward}
              handleExtra={this.handleExtra}
              handleResp={this.handleResp}
            />
          </div>
        );
      case 10:
        return (
          <div>
            <ResponsibilitiesForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChangeResp={this.handleChangeResp}
              handleAdd={this.handleAddResp}
              values={values}
              handleExtra={this.handleExtra}
            />
            <NavbarPage
              step={this.state.step}
              values={values}
              handleAbout={this.handleAbout}
              handleInterest={this.handleInterest}
              handleSkill={this.handleSkill}
              handleProject={this.handleProject}
              handleTraining={this.handleTraining}
              handleEducation={this.handleEducation}
              handleCourse={this.handleCourse}
              handleAward={this.handleAward}
              handleExtra={this.handleExtra}
              handleResp={this.handleResp}
            />
          </div>
        );
      case 11:
        return (
          <div>
            <EndView
              prevStep={this.prevStep}
              values={values}
              handleChange={this.handleChange}
              handleResp={this.handleResp}
            />
            <NavbarPage
              step={this.state.step}
              values={values}
              handleAbout={this.handleAbout}
              handleInterest={this.handleInterest}
              handleSkill={this.handleSkill}
              handleProject={this.handleProject}
              handleTraining={this.handleTraining}
              handleEducation={this.handleEducation}
              handleCourse={this.handleCourse}
              handleAward={this.handleAward}
              handleExtra={this.handleExtra}
              handleResp={this.handleResp}
            />
          </div>
        );
    }
  }
}

export default UserForm;
