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


function InfoForm(props) {

  const buttonStyle = {
    background: "pink",
    margin: "5px",
    float: "left"
  }
   
    return (<div class = "Introduction"  className = "section"><h3>About you</h3>

      <TextField className = "TextField" margin = "normal" label = "First Name" variant="outlined"  type="text"  name="firstName" onChange={props.handleInputChange} value={props.inputs.firstName} required />
      
      <TextField className = "TextField" margin = "normal" label = "Last Name"  variant="outlined"  type="text" name="lastName" onChange={props.handleInputChange} value={props.inputs.lastName}required />
        
      <TextField className = "TextField" margin = "normal" label = "About" variant="outlined"  type="text" name="about" onChange={props.handleInputChange} value={props.inputs.about}required />
      
      <TextField className = "TextField" margin = "normal" label = "Email Address" variant="outlined" type="email" name="email" onChange={props.handleInputChange} value={props.inputs.email}required />
    
      <TextField className = "TextField" margin = "normal" label = "Phone" type="number" variant="outlined" name="phone" onChange={props.handleInputChange} value={props.inputs.phone}/>
    
      <TextField className = "TextField" margin = "normal" label = "Address" variant="outlined"  type="text" name="address" onChange={props.handleInputChange} value={props.inputs.address} />
      
      <Link to ="/resume-gen/myresume">
        <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Previous</Button>
      </Link>
  
      <Link to ="/resume-gen/education">
        <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Next</Button>
      </Link>
    
    </div>)
}


export default InfoForm;