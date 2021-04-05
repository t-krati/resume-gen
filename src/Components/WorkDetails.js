import React from "react";
import SubHeading from "./SubHeading";

function WorkDetails(props) {
    const mystyle = {

    }
    return <div>
        <SubHeading text = "Work Details" />
        <span style = {{fontSize: "large", fontWeight: 700}}>{props.details.role}</span><br />
        <span style = {{fontWeight: 700}}>{props.details.company}, {props.details.workcity}, {props.details.workstate}</span>
        <span style = {{fontWeight: 700}}> | {props.details.workstart}  {props.details.workend}</span><br />
        <ul>
            <li>{props.details.responsibilities}</li>
        </ul>
        
    </div>
}

export default WorkDetails;