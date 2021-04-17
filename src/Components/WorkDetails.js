import React from "react";
import SubHeading from "./SubHeading";

function WorkDetails(props) {
    
    return <div>
        <SubHeading text = "Work Details" />
        {props.workInfos.map((workInfo,index) => {
            return <div key = {index}>
            <span style = {{fontSize: "large", fontWeight: 700}}>{workInfo.role}</span><br />
            <span style = {{fontWeight: 700}}>{workInfo.company}, {workInfo.workCity}, {workInfo.workState}</span>
            <span style = {{fontWeight: 700}}> | {workInfo.workStart}  {workInfo.workEnd}</span><br />
             <ul>
                <li>{workInfo.workDescription}</li>
            </ul>
            </div>
        })}
        
        
        
    </div>
}

export default WorkDetails;