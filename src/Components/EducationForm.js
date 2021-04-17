import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./FormStyle.css";



function EducationForm(props) {

    const buttonStyle = {
        background: "pink",
        margin: "5px",
        float: "left"
      }

    return (<div name = "education-detail" className = "section" ><h3>Education Details</h3>
    
    {props.inputs.educationInfos.map((educationInfo,index) => {
      return <div key = {index}>
      <TextField className = "TextField" margin = "normal" label = "Degree" variant="outlined"  type="text" name="degree" onChange={(event) => props.handleInputArrayChange("educationInfos",index,event)} value={educationInfo.degree} /><br/>
      {props.errors.educationInfos.length > index && <span className = "errors">{props.errors.educationInfos[index].degree}</span>}<br/>
      <TextField className = "TextField" margin = "normal" label = "College" variant="outlined"  type="text" name="college" onChange={(event) => props.handleInputArrayChange("educationInfos",index,event)} value={educationInfo.college} /><br/>
      {props.errors.educationInfos.length > index && <span className = "errors">{props.errors.educationInfos[index].college}</span>}<br/>
      <TextField className = "TextField" margin = "normal" label = "College" variant="outlined"  type="date" name="collegeStart" onChange={(event) => props.handleInputArrayChange("educationInfos",index,event)} value={educationInfo.collegeStart} /><br/>
      {props.errors.educationInfos.length > index && <span className = "errors">{props.errors.educationInfos[index].collegeStart}</span>}<br/>
      <TextField className = "TextField" margin = "normal" label = "College" variant="outlined"  type="date" name="collegeEnd" onChange={(event) => props.handleInputArrayChange("educationInfos",index,event)} value={educationInfo.collegeEnd} /><br/>
      {props.errors.educationInfos.length > index && <span className = "errors">{props.errors.educationInfos[index].collegeEnd}</span>}<br/>
      <TextField className = "TextField" margin = "normal" label = "City" variant="outlined"  type="text" name="collegeCity" onChange={(event) => props.handleInputArrayChange("educationInfos",index,event)} value={educationInfo.collegeCity} /><br/>
      {props.errors.educationInfos.length > index && <span className = "errors">{props.errors.educationInfos[index].collegeCity}</span>}<br/>
      <TextField className = "TextField" margin = "normal" label = "State" variant="outlined"  type="text" name="collegeState" onChange={(event) => props.handleInputArrayChange("educationInfos",index,event)} value={educationInfo.collegeState} /><br/>
      {props.errors.educationInfos.length > index && <span className = "errors">{props.errors.educationInfos[index].collegeState}</span>}<br/>
      <TextField className = "TextField" margin = "normal" label = "CGPA" variant="outlined"  type="text" name="collegeGPA" onChange={(event) => props.handleInputArrayChange("educationInfos",index,event)} value={educationInfo.collegeGPA} /><br/>
      {props.errors.educationInfos.length > index && <span className = "errors">{props.errors.educationInfos[index].collegeGPA}</span>}<br/>
  
  </div>
    })}
    
    <Button className = "button" variant="contained" name = "educationInfos" color="secondary" style = {buttonStyle} onClick = {props.handleDynamicAddition} >+</Button>
    <Button className = "button" variant="contained" color="secondary" name = "educationInfos" 
    style = {buttonStyle} onClick = {props.handleDynamicRemoval} >-</Button>

    <Link to ="/resume-gen/info">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Previous</Button>
    </Link>
    <Button type = "submit" onClick = {(event) => {props.handleSubmit(event,"educationInfos")}} className = "button" variant="contained" color="secondary" style = {buttonStyle}>Validate Data</Button>
      
   <Link to ="/resume-gen/work">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Next</Button>
    </Link>
    
</div>)
}


export default EducationForm;