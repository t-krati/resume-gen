import React from "react";
import SubHeading from "./SubHeading";
function ProjectDetails(props) {
    /*const mystyle = {
        borderBottom: "2px solid black"
    }*/
    return <div>
        <SubHeading text = "Project Details" />
        {props.projects.map((project,index) => {
            return <div key = {index}>
            <span style = {{fontWeight: 700}}>{project.projectTitle} | {project.projectStart} {project.projectEnd}</span><br />
        <ul>
            <li>{project.projectDescription}</li></ul>
            </div>
        })}
        
    </div>
}
export default ProjectDetails;