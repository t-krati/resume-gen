import React from "react";
import SubHeading from "./SubHeading";
function ProjectDetails(props) {
    const mystyle = {
        borderBottom: "2px solid black"
    }
    return <div>
        <SubHeading text = "Project Details" />
        <span>{props.details.projecttitle}</span><br />
        <span>{props.details.projectdescription}</span><br />
    </div>
}
export default ProjectDetails;