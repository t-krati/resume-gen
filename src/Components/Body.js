import React from "react";
import Education from "./EducationDetails";
import Work from "./WorkDetails";
import SubHeading from "./SubHeading";
import Project from "./ProjectDetails";
import Skill from "./Skills.js"

function Body(props) {
    return <div>
        <SubHeading text = "About" />
        <div>{props.inputs.about}</div>
        <Education educationInfos = {props.inputs.educationInfos} /> 
        <Work workInfos = {props.inputs.workInfos} />
        <Project projects = {props.inputs.projects}/>
        <Skill skills = {props.inputs.skills} />
    </div>
}
export default Body;