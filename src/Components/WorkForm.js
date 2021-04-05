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

      
    return (<div class = "work-details" className = "section" ><h3>Work Details</h3>
      
    <TextField className = "Textfield " margin = "normal" label = "Employer" variant="outlined"  type="text" name="company" onChange={props.handleInputChange} value={props.inputs.company}required />
  
    <TextField className = "Textfield " margin = "normal" label = "Role" variant="outlined"  type="text" name="role" onChange={props.handleInputChange} value={props.inputs.role}required />
  
    <TextField className = "Textfield " margin = "normal" label = "City" variant="outlined"  type="text" name="workcity" onChange={props.handleInputChange} value={props.inputs.workcity}required />
    
    <TextField className = "Textfield " margin = "normal" label = "State" variant="outlined"  type="text" name="workstate" onChange={props.handleInputChange} value={props.inputs.workstate}required />

    <TextField className = "Textfield " margin = "normal" label = "Start" type="date" variant="outlined" name="workstart" onChange={props.handleInputChange} value={props.inputs.workstart} />
     
    <TextField className = "Textfield " margin = "normal" label = "End" type="date" variant="outlined" name="workend" onChange={props.handleInputChange} value={props.inputs.workend}
     />

    <TextareaAutosize 
      style = {{width: "50%"}}
      name="responsibilities"
      rowsMin = {10}
      placeholder="Describe your work"
      onChange={props.handleInputChange} 
      value={props.inputs.responsibilities}

    />

    <Link to ="/resume-gen/education">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Previous</Button>
    </Link>
  
    <Link to ="/resume-gen/project">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Next</Button>
    </Link>
 
</div>)
}

export default WorkForm;