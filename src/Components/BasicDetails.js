import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Link } from "react-router-dom";
import "./FormStyle.css";
import { TextareaAutosize } from "@material-ui/core";

function BasicDetails(props) {

    const buttonStyle = {
      background: "pink",
      margin: "5px",
      float: "left"
    }

    return <div>
    <div className = "headerStyle" >Enter Your Details</div>
    <form onSubmit = {props.handleSubmit} className = "formStyle">
    <div class = "Introduction"  className = "section"><h3>About you</h3>

      <TextField className = "TextField" margin = "normal" label = "First Name" variant="outlined"  type="text"  name="firstName" onChange={props.handleInputChange} value={props.inputs.firstName} required />
      
      <TextField className = "TextField" margin = "normal" label = "Last Name"  variant="outlined"  type="text" name="lastName" onChange={props.handleInputChange} value={props.inputs.lastName}required />
        
      <TextField className = "TextField" margin = "normal" label = "About" variant="outlined"  type="text" name="about" onChange={props.handleInputChange} value={props.inputs.about}required />
      
      <TextField className = "TextField" margin = "normal" label = "Email Address" variant="outlined" type="email" name="email" onChange={props.handleInputChange} value={props.inputs.email}required />
    
      <TextField className = "TextField" margin = "normal" label = "Phone" type="number" variant="outlined" name="phone" onChange={props.handleInputChange} value={props.inputs.phone}/>
    
      <TextField className = "TextField" margin = "normal" label = "Address" variant="outlined"  type="text" name="address" onChange={props.handleInputChange} value={props.inputs.address} />
    
    </div>

    <div class = "education-detail" className = "section" ><h3>Education Details</h3>
      
        <TextField className = "TextField" margin = "normal" label = "Degree" variant="outlined"  type="text" name="degree" onChange={props.handleInputChange} value={props.inputs.degree} />
      
        <TextField className = "TextField" margin = "normal" label = "College" variant="outlined"  type="text" name="college" onChange={props.handleInputChange} value={props.inputs.college} />
      
        <TextField className = "TextField" margin = "normal" label = "Start" type="date" variant="outlined" name="collegestart" onChange={props.handleInputChange} value={props.inputs.collegestart} />
      
        <TextField className = "TextField" margin = "normal" label = "End" type="date" variant="outlined" name="collegeend" onChange={props.handleInputChange} value={props.inputs.collegeend} />
      
    </div>
    <div class = "work-details" className = "section" ><h3>Work Details</h3>
      
        <TextField className = "TextField " margin = "normal" label = "Employer" variant="outlined"  type="text" name="Employer" onChange={props.handleInputChange} value={props.inputs.company}required />
      
        <TextField className = "TextField " margin = "normal" label = "Role" variant="outlined"  type="text" name="role" onChange={props.handleInputChange} value={props.inputs.role}required />
      
        <TextField className = "TextField " margin = "normal" label = "Responsibilities" variant="outlined"  type="text" name="responsibilities" rowsMin={3} onChange={props.handleInputChange} value={props.inputs.responsibilities}required />
      
        <TextField className = "TextField " margin = "normal" label = "City" variant="outlined"  type="text" name="workcity" onChange={props.handleInputChange} value={props.inputs.workcity}required />
        
        <TextField className = "TextField " margin = "normal" label = "State" variant="outlined"  type="text" name="workstate" onChange={props.handleInputChange} value={props.inputs.workstate}required />

        <TextField className = "TextField " margin = "normal" label = "Start" type="date" variant="outlined" name="workstart" onChange={props.handleInputChange} value={props.inputs.workstart} />
         
        <TextField className = "TextField " margin = "normal" label = "End" type="date" variant="outlined" name="workend" onChange={props.handleInputChange} value={props.inputs.workend}
         />
     
    </div>
    <div class = "project-detail"  className = "section" ><h3>Project Details</h3>
      
        <TextField className = "TextField" margin = "normal" label = "Project Title" variant="outlined"  type="text" name="projecttitle" onChange={props.handleInputChange} value={props.inputs.projecttitle}required />

        <TextField className = "TextField" margin = "normal" label = "Project Description"  variant="outlined"  type="text" name="projectdescription" onChange={props.handleInputChange} value={props.inputs.projectdescription}required />
     
    </div> 

    <div class = "skills"  className = "section" ><h3>Skills</h3>
      
        <TextField className = "TextField" margin = "normal" label = "Skill" variant="outlined"  type="text" name="skill" onChange={props.handleInputChange} value={props.inputs.skill}required />

        <FormControl>
        <InputLabel id="demo-simple-select-label">Skill Level</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.inputs.skilllevel}
          onChange={props.handleInputChange}
        >
          <MenuItem value={10}>Beginner</MenuItem>
          <MenuItem value={20}>Medium</MenuItem>
          <MenuItem value={30}>Good</MenuItem>
          <MenuItem value={40}>Expert</MenuItem>
        </Select>
      </FormControl>
    </div> 
    
    <Button type="submit" className = "button" style = {buttonStyle} variant="contained" color="secondary">Submit</Button>
    
    <Link to ="/resume-gen/myresume">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>View Resume</Button>
    </Link>
    
    
  </form></div>
  
}

export default BasicDetails;
