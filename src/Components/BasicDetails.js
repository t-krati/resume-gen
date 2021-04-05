import React from "react";
import Button from "@material-ui/core/Button";
import "./FormStyle.css";
import InfoForm from './InfoForm';
import EducationForm from './EducationForm';
import WorkForm from './EducationForm';
import SkillForm from './SkillForm';
import ProjectForm from './ProjectForm';
import { Route , BrowserRouter as Router , Link, useRouteMatch } from "react-router-dom";

function BasicDetails(props) {

    

    //const { path, url } = useRouteMatch();

    const buttonStyle = {
      background: "pink",
      margin: "5px",
      float: "left"
    }

    const divStyle = {
      background: "#537d82",
      color: "white",
      alignItems: "center",
      textAlign: "center",
      width: "33.33%",
      borderRadius: "2%",
      padding: "5px",
      marginLeft: "33.33%"
    }

    return <Link to = "/resume-gen/info" style={{ textDecoration: 'none' }}><div style = {divStyle}>
    <h1>Create your Resume --></h1>
    

    <form onSubmit = {props.handleSubmit} className = "formStyle">
    
    <Button type="submit" className = "button" style = {buttonStyle} variant="contained" color="secondary">Submit</Button>
    
    <Link to ="/resume-gen/myresume">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>View Resume</Button>
    </Link>
    
    </form></div>
    </Link>
  
  
}

export default BasicDetails;
