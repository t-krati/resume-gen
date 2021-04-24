import React,{useState} from "react";
import { Link , Redirect } from "react-router-dom";
import "./FormStyle.css";
import { TextareaAutosize , Button , TextField } from '@material-ui/core';

function WorkForm(props) {

    const buttonStyle = {
        background: "#3D72A1",
        margin: "5px",
        float: "left"
    }

    const [clicked,setClicked] = useState(false);

    const submitWorkInfo = (event,section) => {
      props.handleSubmit(event,section);
      setClicked(true);
    }

    const checkErrors = (workInfos) => {
      for(var i = 0; i < workInfos.length; i++) {
        if(workInfos[i].company || workInfos[i].role || workInfos[i].workStart || workInfos[i].workEnd)
          return false;
      }
      return true;
  }

    return <div  name = "work-details" className = "section" >
      <h3>Work Details</h3>
      {props.inputs.workInfos.map( (workInfo,index) => {
      return <div key = {index}>
      
      <TextField className = "TextField " margin = "normal" label = "Employer" variant="outlined"  type="text" name="company" onChange={(event) => props.handleInputArrayChange("workInfos",index,event)} value={workInfo.company} required /><br/>
      {props.errors.workInfos.length > index && <span className = "errors">{props.errors.workInfos[index].company}</span>}<br/>
      <TextField className = "TextField " margin = "normal" label = "Role" variant="outlined"  type="text" name="role" onChange={(event) => props.handleInputArrayChange("workInfos",index,event)} value={workInfo.role}required /><br/>
      {props.errors.workInfos.length > index && <span className = "errors">{props.errors.workInfos[index].role}</span>}<br/>
      <TextField className = "TextField " margin = "normal" label = "City" variant="outlined"  type="text" name="workCity" onChange={(event) => props.handleInputArrayChange("workInfos",index,event)} value={workInfo.workCity}required /><br/>
      {props.errors.workInfos.length > index && <span className = "errors">{props.errors.workInfos[index].workCity}</span>}<br/>
      <TextField className = "TextField " margin = "normal" label = "State" variant="outlined"  type="text" name="workState" onChange={(event) => props.handleInputArrayChange("workInfos",index,event)} value={workInfo.workState}required /><br/>
      {props.errors.workInfos.length > index && <span className = "errors">{props.errors.workInfos[index].workState}</span>}<br/>
      <TextField className = "TextField " margin = "normal" label = "Start" type="date" variant="outlined" name="workStart" onChange={(event) => props.handleInputArrayChange("workInfos",index,event)} value={workInfo.workStart} /><br/>
      {props.errors.workInfos.length > index && <span className = "errors">{props.errors.workInfos[index].workStart}</span>}<br/>
      <TextField className = "TextField " margin = "normal" label = "End" type="date" variant="outlined" name="workEnd" onChange={(event) => props.handleInputArrayChange("workInfos",index,event)} value={workInfo.workEnd}
      /><br/>
      {props.errors.workInfos.length > index && <span className = "errors">{props.errors.workInfos[index].workEnd}</span>}<br/>

      <TextareaAutosize 
      style = {{width: "98%", background: 'white'}}
      name="workDescription"
      rowsMin = {10}
      placeholder="Describe your work"
      onChange={(event) => props.handleInputArrayChange("workInfos",index,event)} 
      value={workInfo.workDescription}

      />
    </div>})}

    <Button className = "button" variant="contained" name = "workInfos" color="secondary" style = {buttonStyle} onClick = {props.handleDynamicAddition} >+</Button>
    <Button className = "button" variant="contained" color="secondary" name = "workInfos" style = {buttonStyle} onClick = {props.handleDynamicRemoval} >-</Button>

    <Link to ="/resume-gen/education">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Previous</Button>
    </Link>
    <Button type = "submit" onClick = {(event) => {submitWorkInfo(event,"workInfos")}} className = "button" variant="contained" color="secondary" style = {buttonStyle}>NEXT</Button>

    {clicked && checkErrors(props.errors.workInfos) && <Redirect to = "/resume-gen/projects"/>}
    </div>
}
    
    

export default WorkForm;