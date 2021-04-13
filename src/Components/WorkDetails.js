import React from "react";
import SubHeading from "./SubHeading";

function WorkDetails(props) {
    const mystyle = {

    }
    return <div>
        <SubHeading text = "Work Details" />
        {props.workInfos.map((workInfo) => {
            return <div>
            <span style = {{fontSize: "large", fontWeight: 700}}>{workInfo.role}</span><br />
            <span style = {{fontWeight: 700}}>{workInfo.company}, {workInfo.workcity}, {workInfo.workstate}</span>
            <span style = {{fontWeight: 700}}> | {workInfo.workstart}  {workInfo.workend}</span><br />
             <ul>
                <li>{workInfo.responsibilities}</li>
            </ul>
            </div>
        })}
        
        
        
    </div>
}

export default WorkDetails;