import React from "react";
import SubHeading from "./SubHeading";

function Education(props) {
return <div>
    <SubHeading text = "Education Details" />
    <span>{props.details.degree}</span><br />
    <span>{props.details.college}</span><br />
</div>
}
export default Education;