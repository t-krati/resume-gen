import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import "./FormStyle.css";
import {useState} from "react";


function EducationForm(props) {

    const buttonStyle = {
        background: "pink",
        margin: "5px",
        float: "left"
      }

    return (<div class = "education-detail" className = "section" ><h3>Education Details</h3>

    {props.inputs.educationInfos.map((educationInfo,index) => {
      return <div>
  
  <TextField className = "TextField" margin = "normal" label = "Degree" variant="outlined"  type="text" name="degree" onChange={(event) => props.handleInputArrayChange("educationInfos",index,event)} value={educationInfo.degree} />
  
  <TextField className = "TextField" margin = "normal" label = "College" variant="outlined"  type="text" name="college" onChange={(event) => props.handleInputArrayChange("educationInfos",index,event)} value={educationInfo.college} />
  
  <TextField className = "TextField" margin = "normal" label = "College" variant="outlined"  type="date" name="collegestart" onChange={(event) => props.handleInputArrayChange("educationInfos",index,event)} value={educationInfo.collegestart} />
  
  <TextField className = "TextField" margin = "normal" label = "College" variant="outlined"  type="date" name="collegeend" onChange={(event) => props.handleInputArrayChange("educationInfos",index,event)} value={educationInfo.collegeend} />

  <TextField className = "TextField" margin = "normal" label = "City" variant="outlined"  type="text" name="collegecity" onChange={(event) => props.handleInputArrayChange("educationInfos",index,event)} value={educationInfo.collegecity} />

  <TextField className = "TextField" margin = "normal" label = "State" variant="outlined"  type="text" name="collegestate" onChange={(event) => props.handleInputArrayChange("educationInfos",index,event)} value={educationInfo.collegestate} />

  <TextField className = "TextField" margin = "normal" label = "CGPA" variant="outlined"  type="text" name="collegegpa" onChange={(event) => props.handleInputArrayChange("educationInfos",index,event)} value={educationInfo.collegegpa} />
  
  </div>
    })}
      
    <Button className = "button" variant="contained" name = "educationInfos" color="secondary" style = {buttonStyle} onClick = {props.handleDynamicAddition} >+</Button>
    <Button className = "button" variant="contained" color="secondary" name = "educationInfos" 
    style = {buttonStyle} onClick = {props.handleDynamicRemoval} >-</Button>

    <Link to ="/resume-gen/info">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Previous</Button>
    </Link>
  
   <Link to ="/resume-gen/work">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Next</Button>
    </Link>
    
</div>)
}


export default EducationForm;