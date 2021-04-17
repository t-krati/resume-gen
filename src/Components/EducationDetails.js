import React from "react";
import SubHeading from "./SubHeading";

function Education(props) {

const spanstyle = {
    fontWeight: 700
}
return <div>
    <SubHeading text = "Education Details" />
    {props.educationInfos.map((educationInfo,index) => {
        return <div key = {index}>
        <span style = {spanstyle}>{educationInfo.degree} | {educationInfo.collegeStart} - {educationInfo.collegeEnd}</span><br />
        <span style = {spanstyle}>{educationInfo.college}, {educationInfo.collegeCity}, {educationInfo.collegeState}</span><br />
        <span><strong>CGPA: </strong>{educationInfo.collegeGPA}</span>
        </div>
    })}
    
</div>
}
export default Education;