import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./FormStyle.css";
import { TextareaAutosize } from "@material-ui/core";

function ProjectForm(props) {

    const buttonStyle = {
        background: "pink",
        margin: "5px",
        float: "left"
      }

    return (<div name = "project-detail"  className = "section" ><h3>Project Details</h3>
      
      {props.inputs.projects.map((project,index) => {
        return <div key = {index}>
        <TextField className = "TextField" margin = "normal" label = "Project Title" variant="outlined"  type="text" name="projectTitle" onChange={(event) => props.handleInputArrayChange("projects",index,event)} value={project.projectTitle}required /><br/>
        {props.errors.projects.length > index && <span className = "errors">{props.errors.projects[index].projectTitle}</span>}<br/>
        <TextareaAutosize 
          style = {{width: "50%"}}
          rowsMin = {10}
          placeholder="Describe your Project"
          name="projectDescription" 
          onChange={(event) => props.handleInputArrayChange("projects",index,event)} 
          value={project.projectDescription}
        /><br/>
        {props.errors.projects.length > index && <span className = "errors">{props.errors.projects[index].projectDescription}</span>}<br/>
        <TextField className = "Textfield " margin = "normal" label = "Start" type="date" variant="outlined" name="projectStart" onChange={(event) => props.handleInputArrayChange("projects",index,event)} value={project.projectStart} /><br/>
        {props.errors.projects.length > index && <span className = "errors">{props.errors.projects[index].projectStart}</span>}<br/>
        <TextField className = "Textfield " margin = "normal" label = "End" type="date" variant="outlined" name="projectEnd" onChange={(event) => props.handleInputArrayChange("projects",index,event)} value={project.projectEnd}
        /><br/>
        {props.errors.projects.length > index && <span className = "errors">{props.errors.projects[index].projectEnd}</span>}<br/>
        </div>
      })}
    
      <Button className = "button" variant="contained" name = "projects" color="secondary" style = {buttonStyle} onClick = {props.handleDynamicAddition} >+</Button>
    <Button className = "button" variant="contained" name = "projects" color="secondary" style = {buttonStyle} onClick = {props.handleDynamicRemoval} >-</Button>

    <Link to ="/resume-gen/work">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Previous</Button>
    </Link>
    <Button type = "submit" onClick = {(event) => {props.handleSubmit(event,"projects")}} className = "button" variant="contained" color="secondary" style = {buttonStyle}>Validate Data</Button>
   <Link to ="/resume-gen/skills">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Next</Button>
    </Link>
 
</div> );
}

export default ProjectForm;