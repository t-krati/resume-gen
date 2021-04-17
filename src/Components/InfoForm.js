import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./FormStyle.css";
import { useHistory } from 'react-router-dom';


function InfoForm(props) {

  const buttonStyle = {
    background: "pink",
    margin: "5px",
    float: "left"
  }
  
  const history = useHistory();
  var validateData = (event,section,errors) => {
    props.handleSubmit(event,section);
    event.preventDefault();
    console.log(errors);
    //callback();
    //console.log(props.errors.firstName && !props.errors.lastName && !props.errors.email && !props.errors.address);
    
    //if( !props.errors.firstName && !props.errors.lastName && !props.errors.email && !props.errors.address){
     // history.push("/resume-gen/education");
    //} 

  }
  var redirect = () => {
    if( !props.errors.firstName && !props.errors.lastName && !props.errors.email && !props.errors.address){
       history.push("/resume-gen/education");
     }
  }
   
    return (<div name = "Introduction"  className = "section"><h3>About you</h3>

      <TextField className = "TextField" margin = "normal" label = "First Name" variant="outlined"  type="text"  name="firstName" onChange={props.handleInputChange} value={props.inputs.firstName} required /><br/>
      {props.errors.firstName && <span className = "errors">{props.errors.firstName}</span>}<br/>
      <TextField className = "TextField" margin = "normal" label = "Last Name"  variant="outlined"  type="text" name="lastName" onChange={props.handleInputChange} value={props.inputs.lastName}required /><br/>
      {props.errors.lastName && <span className = "errors">{props.errors.lastName}</span>}<br/>
      <TextField className = "TextField" margin = "normal" label = "About" variant="outlined"  type="text" name="about" onChange={props.handleInputChange} value={props.inputs.about}required /><br/>
      
      <TextField className = "TextField" margin = "normal" label = "Email Address" variant="outlined" type="email" name="email" onChange={props.handleInputChange} value={props.inputs.email}required /><br/>
       {props.errors.email && <span className = "errors">{props.errors.email}</span>}<br/>
      <TextField className = "TextField" margin = "normal" label = "Phone" type="number" variant="outlined" name="phone" onChange={props.handleInputChange} value={props.inputs.phone}/><br/>
    
      <TextField className = "TextField" margin = "normal" label = "Address" variant="outlined"  type="text" name="address" onChange={props.handleInputChange} value={props.inputs.address} /><br/>
      {props.errors.address && <span className = "errors">{props.errors.address}</span>}<br/>
      <Link to ="/resume-gen/myresume">
        <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Previous</Button>
      </Link>

      <Button type = "submit" onClick = {(event) => {validateData(event,"basicInfo", props.errors)}} className = "button" variant="contained" color="secondary" style = {buttonStyle}>Validate Data</Button>
      
      <Link to ="/resume-gen/education">
        <Button type = "submit" className = "button" variant="contained" color="secondary" style = {buttonStyle}>Next</Button>
      </Link>
      
      
    
    </div>)
}


export default InfoForm;