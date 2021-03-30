import React from "react";
import SubHeading from "./SubHeading";

function Education(props) {
return <div>
    <SubHeading text = "Education Details" />
    <span>Degree: {props.details.degree}</span><br />
    <span>college : {props.details.college}</span><br />
</div>
}
export default Education;