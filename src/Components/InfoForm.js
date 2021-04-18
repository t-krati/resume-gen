import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import "./FormStyle.css";
import { Redirect } from 'react-router-dom';
import { TextareaAutosize , Button } from '@material-ui/core';


function InfoForm(props) {

  const buttonStyle = {
    background: "pink",
    margin: "5px",
    float: "left"
  }
    
  const [clicked,setClicked] = useState(false);

  const submitBasicInfo = (event,section) => {
    props.handleSubmit(event,section);
    setClicked(true);
  }
    return (<div name = "Introduction"  className = "section"><h3>About you</h3>

      <TextField className = "TextField" margin = "normal" label = "First Name" variant="outlined"  type="text"  name="firstName" onChange={props.handleInputChange} value={props.inputs.firstName} required /><br/>
      {props.errors.firstName && <span className = "errors">{props.errors.firstName}</span>}<br/>
      <TextField className = "TextField" margin = "normal" label = "Last Name"  variant="outlined"  type="text" name="lastName" onChange={props.handleInputChange} value={props.inputs.lastName}required /><br/>
      {props.errors.lastName && <span className = "errors">{props.errors.lastName}</span>}<br/>
      
      <TextareaAutosize 
      style = {{width: "50%",background: 'rgb(248, 247, 245)'}}
      name="about"
      margin = "normal"
      label = "About"
      rowsMin = {10}
      placeholder="Write a short bio."
      onChange={props.handleInputChange} 
      value={props.inputs.about}
      />
      {props.errors.about && <span className = "errors">{props.errors.about}</span>}<br/>
      <TextField className = "TextField" margin = "normal" label = "Email Address" variant="outlined" type="email" name="email" onChange={props.handleInputChange} value={props.inputs.email}required /><br/>
       {props.errors.email && <span className = "errors">{props.errors.email}</span>}<br/>
      <TextField className = "TextField" margin = "normal" label = "Phone" type="number" variant="outlined" name="phone" onChange={props.handleInputChange} value={props.inputs.phone}/><br/>
      {props.errors.phone && <span className = "errors">{props.errors.phone}</span>}<br/>
      <TextField className = "TextField" margin = "normal" label = "Address" variant="outlined"  type="text" name="address" onChange={props.handleInputChange} value={props.inputs.address} /><br/>
      {props.errors.address && <span className = "errors">{props.errors.address}</span>}<br/>
      <Link to ="/resume-gen">
        <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Previous</Button>
      </Link>

      <Button type = "submit" onClick = {(event) => {submitBasicInfo(event,"basicInfo")}} className = "button" variant="contained" color="secondary" style = {buttonStyle}>NEXT</Button>
      {(clicked && !props.errors.firstName && !props.errors.lastName && !props.errors.email && !props.errors.address && !props.errors.phone) && !props.errors.about && <Redirect to = "/resume-gen/education" />}
      
      
    
    </div>)
}


export default InfoForm;