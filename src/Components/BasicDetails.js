import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import useSignUpForm from "./CustomHooks";
import ReactDOM from "react-dom";
import Template from "./Template1";
import { Link } from "react-router-dom";
import "../Body.css";
//import { useForm } from "react-hook-form";
function BasicDetails(props) {
  const signup = () => {
    return (`User Created!
           Name: ${props.inputs.firstName} ${props.inputs.lastName}
           Email: ${props.inputs.email}`);
  }
  /*const renderTemplate = () => {
    //console.log(inputs);
    ReactDOM.render(<Template details = {inputs}/>,document.getElementById("template"));
  }*/
  //const {inputs, props.handleInputChange, handleSubmit} = useSignUpForm(signup);
  

    const headerStyle  = {
      background: "#3D72A1",
      padding: "30px",
      color: "white",
      fontSize: "40px",
      marginBottom: "40px"
    }

    return <div>
    <div class = "header" style = {headerStyle}>Enter Your Details</div>
    <form onSubmit = {props.handleSubmit}>
    <div class = "form">
    <div>
      
      <TextField label = "First Name" type="text"  name="firstName" onChange={props.handleInputChange} value={props.inputs.firstName} required />
      
      <TextField label = "Last Name" type="text" name="lastName" onChange={props.handleInputChange} value={props.inputs.lastName}required />
    </div>
    <div>
    <div>
      <TextField label = "About" type="text" name="about" onChange={props.handleInputChange} value={props.inputs.about}required />
    </div>
      
      <TextField label = "Email Address" type="email" name="email" onChange={props.handleInputChange} value={props.inputs.email}required />
    </div>
    <div>
      <TextField label = "Phone" type="number" name="phone" onChange={props.handleInputChange} value={props.inputs.phone}/>
    </div>
    <div>
      <TextField label = "Address" type="text" name="address" onChange={props.handleInputChange} value={props.inputs.address} />
    </div>
    </div>
    <div class = "education-detail">
      <div>
        <TextField label = "Degree" type="text" name="degree" onChange={props.handleInputChange} value={props.inputs.degree} />
      </div>
      <div>
        <TextField label = "College" type="text" name="college" onChange={props.handleInputChange} value={props.inputs.college} />
      </div>
      <div>
        <TextField label = "Start" type="date" name="collegestart" onChange={props.handleInputChange} value={props.inputs.collegestart} />
      </div>
      <div>
        <TextField label = "End" type="date" name="collegeend" onChange={props.handleInputChange} value={props.inputs.collegeend} />
      </div>
    </div>
    <div class = "work-details">
      <div>
        <TextField label = "Company" type="text" name="company" onChange={props.handleInputChange} value={props.inputs.company}required />
      </div>
      <div>
        <TextField label = "Role" type="text" name="role" onChange={props.handleInputChange} value={props.inputs.role}required />
      </div>
      <div>
        <TextField label = "Responsibilities" type="text" name="responsibilities" onChange={props.handleInputChange} value={props.inputs.responsibilities}required />
      </div>
      <div>
        <TextField label = "Start" type="date" name="workstart" onChange={props.handleInputChange} value={props.inputs.workstart} />
      </div>
      <div>
        <TextField label = "End" type="date" name="workend" onChange={props.handleInputChange} value={props.inputs.workend}
         />
      </div>
    </div>
    <div class = "project-detail">
      <div>

        <TextField label = "Project Title" type="text" name="projecttitle" onChange={props.handleInputChange} value={props.inputs.projecttitle}required />
      </div>
      <div>

        <TextField label = "Project Description" type="text" name="projectdescription" onChange={props.handleInputChange} value={props.inputs.projectdescription}required />
      </div>
    </div> 
    
    <Button type="submit">Submit</Button>
    
    <Link to ="/resume">
    <Button>View Resume</Button>
    </Link>
    
    
  </form></div>
  
}

export default BasicDetails;
