import React from "react";
import SubHeading from "./SubHeading";

function Education(props) {
return <div>
    <SubHeading text = "Education Details" />
    <span>Degree: {props.details.details.details.degree}</span><br />
    <span>college : {props.details.details.details.college}</span><br />
</div>
}
export default Education;