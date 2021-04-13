import React from "react";
import SubHeading from "./SubHeading";
function ProjectDetails(props) {
    const mystyle = {
        borderBottom: "2px solid black"
    }
    return <div>
        <SubHeading text = "Project Details" />
        {props.projects.map((project) => {
            return <div>
            <span style = {{fontWeight: 700}}>{project.projecttitle} | {project.projectstart} {project.projectend}</span><br />
        <ul>
            <li>{project.projectdescription}</li></ul>
            </div>
        })}
        
    </div>
}
export default ProjectDetails;