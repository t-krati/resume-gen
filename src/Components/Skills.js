import React from "react";
import SubHeading from "./SubHeading";

function Skill(props) {
return <div>
    <SubHeading text = "Skills" />
    <span>{props.details.skill}</span><br />
    <span>{props.details.skilllevel}</span><br />
</div>
}
export default Skill;