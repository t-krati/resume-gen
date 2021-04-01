import React from "react";
import Education from "./EducationDetails";
import Work from "./WorkDetails";
import SubHeading from "./SubHeading";
import Project from "./ProjectDetails";
import Skill from "./Skills.js"

function Body(props) {
    return <div>
        <SubHeading text = "About" />
        <div>{props.details.about}</div>
        <Education details = {props.details} /> 
        <Work details = {props.details} />
        <Project details = {props.details}/>
        <Skill details = {props.details} />
    </div>
}
export default Body;