import React from "react";
import { Link } from "react-router-dom";
import "./FormStyle.css";
import { TextareaAutosize , Button , TextField } from '@material-ui/core';
//import { Editor } from "@tinymce/tinymce-react";

function WorkForm(props) {

    const buttonStyle = {
        background: "pink",
        margin: "5px",
        float: "left"
    }
    return <div  class = "work-details" className = "section" >
      <h3>Work Details</h3>
      {props.inputs.workInfos.map( (workInfo,index) => {
      return <div>
      
      <TextField className = "Textfield " margin = "normal" label = "Employer" variant="outlined"  type="text" name="company" onChange={(event) => props.handleInputArrayChange("workInfos",index,event)} value={props.inputs.workInfos[index].company} required />
  
      <TextField className = "Textfield " margin = "normal" label = "Role" variant="outlined"  type="text" name="role" onChange={(event) => props.handleInputArrayChange("workInfos",index,event)} value={workInfo.role}required />
  
      <TextField className = "Textfield " margin = "normal" label = "City" variant="outlined"  type="text" name="workcity" onChange={(event) => props.handleInputArrayChange("workInfos",index,event)} value={workInfo.workcity}required />
    
      <TextField className = "Textfield " margin = "normal" label = "State" variant="outlined"  type="text" name="workstate" onChange={(event) => props.handleInputArrayChange("workInfos",index,event)} value={workInfo.workstate}required />

      <TextField className = "Textfield " margin = "normal" label = "Start" type="date" variant="outlined" name="workstart" onChange={(event) => props.handleInputArrayChange("workInfos",index,event)} value={workInfo.workstart} />
     
      <TextField className = "Textfield " margin = "normal" label = "End" type="date" variant="outlined" name="workend" onChange={(event) => props.handleInputArrayChange("workInfos",index,event)} value={workInfo.workend}
      />

      <TextareaAutosize 
      style = {{width: "50%"}}
      name="responsibilities"
      rowsMin = {10}
      placeholder="Describe your work"
      onChange={(event) => props.handleInputArrayChange("workInfos",index,event)} 
      value={workInfo.responsibilities}

      />
    </div>})}

    <Button className = "button" variant="contained" name = "workInfos" color="secondary" style = {buttonStyle} onClick = {props.handleDynamicAddition} >+</Button>
    <Button className = "button" variant="contained" color="secondary" name = "workInfos" style = {buttonStyle} onClick = {props.handleDynamicRemoval} >-</Button>

    <Link to ="/resume-gen/education">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Previous</Button>
    </Link>
  
    <Link to ="/resume-gen/project">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Next</Button>
    </Link>
    </div>
}
    
    

export default WorkForm;