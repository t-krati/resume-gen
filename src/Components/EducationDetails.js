import React from "react";
import SubHeading from "./SubHeading";

function Education(props) {

const spanstyle = {
    fontWeight: 700
}
return <div>
    <SubHeading text = "Education Details" />
    {props.educationInfos.map((educationInfo) => {
        return <div>
        <span style = {spanstyle}>{educationInfo.degree} | {educationInfo.collegestart} - {educationInfo.collegeend}</span><br />
        <span style = {spanstyle}>{educationInfo.college}, {educationInfo.collegecity}, {educationInfo.collegestate}</span><br />
        <span><strong>CGPA: </strong>{educationInfo.collegegpa}</span>
        </div>
    })}
    
</div>
}
export default Education;