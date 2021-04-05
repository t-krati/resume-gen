import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import "./FormStyle.css";


function EducationForm(props) {

    const buttonStyle = {
        background: "pink",
        margin: "5px",
        float: "left"
      }
      
    return (<div class = "education-detail" className = "section" ><h3>Education Details</h3>
      
    <TextField className = "TextField" margin = "normal" label = "Degree" variant="outlined"  type="text" name="degree" onChange={props.handleInputChange} value={props.inputs.degree} />
  
    <TextField className = "TextField" margin = "normal" label = "College" variant="outlined"  type="text" name="college" onChange={props.handleInputChange} value={props.inputs.college} />
    
    <TextField className = "TextField" margin = "normal" label = "College" variant="outlined"  type="date" name="collegestart" onChange={props.handleInputChange} value={props.inputs.collegestart} />
    
    <TextField className = "TextField" margin = "normal" label = "College" variant="outlined"  type="date" name="collegeend" onChange={props.handleInputChange} value={props.inputs.collegeend} />

    <TextField className = "TextField" margin = "normal" label = "City" variant="outlined"  type="text" name="collegecity" onChange={props.handleInputChange} value={props.inputs.collegecity} />

    <TextField className = "TextField" margin = "normal" label = "State" variant="outlined"  type="text" name="collegestate" onChange={props.handleInputChange} value={props.inputs.collegestate} />
  
    <TextField className = "TextField" margin = "normal" label = "CGPA" variant="outlined"  type="text" name="collegegpa" onChange={props.handleInputChange} value={props.inputs.collegegpa} />

    <Link to ="/resume-gen/info">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Previous</Button>
    </Link>
  
   <Link to ="/resume-gen/work">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Next</Button>
    </Link>
    
</div>)
}


export default EducationForm;