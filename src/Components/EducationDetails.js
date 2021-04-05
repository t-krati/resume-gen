import React from "react";
import SubHeading from "./SubHeading";

function Education(props) {

const spanstyle = {
    fontWeight: 700
}
return <div>
    <SubHeading text = "Education Details" />
    <span style = {spanstyle}>{props.details.degree} | {props.details.collegestart} - {props.details.collegeend}</span><br />
    <span style = {spanstyle}>{props.details.college}, {props.details.collegecity}, {props.details.collegestate}</span><br />
    <span><strong>CGPA: </strong>{props.details.collegegpa}</span>
</div>
}
export default Education;