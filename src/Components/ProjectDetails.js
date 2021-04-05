import React from "react";
import SubHeading from "./SubHeading";
function ProjectDetails(props) {
    const mystyle = {
        borderBottom: "2px solid black"
    }
    return <div>
        <SubHeading text = "Project Details" />
        <span style = {{fontWeight: 700}}>{props.details.projecttitle} | {props.details.projectstart} {props.details.projectend}</span><br />
        <ul>
            <li>{props.details.projectdescription}</li></ul>
    </div>
}
export default ProjectDetails;