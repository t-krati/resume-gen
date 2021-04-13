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

    return (<div class = "project-detail"  className = "section" ><h3>Project Details</h3>
      
      {props.inputs.projects.map((project,index) => {
        return <div>
        <TextField className = "TextField" margin = "normal" label = "Project Title" variant="outlined"  type="text" name="projecttitle" onChange={(event) => props.handleInputArrayChange("projects",index,event)} value={project.projecttitle}required />

        <TextareaAutosize 
          style = {{width: "50%"}}
          rowsMin = {10}
          placeholder="Describe your Project"
          name="projectdescription" 
          onChange={(event) => props.handleInputArrayChange("projects",index,event)} 
          value={project.projectdescription}
        />

        <TextField className = "Textfield " margin = "normal" label = "Start" type="date" variant="outlined" name="projectstart" onChange={(event) => props.handleInputArrayChange("projects",index,event)} value={project.projectstart} />
 
        <TextField className = "Textfield " margin = "normal" label = "End" type="date" variant="outlined" name="projectend" onChange={(event) => props.handleInputArrayChange("projects",index,event)} value={project.projectend}
        />
        </div>
      })}
    
      <Button className = "button" variant="contained" name = "projects" color="secondary" style = {buttonStyle} onClick = {props.handleDynamicAddition} >+</Button>
    <Button className = "button" variant="contained" name = "projects" color="secondary" style = {buttonStyle} onClick = {props.handleDynamicRemoval} >-</Button>

    <Link to ="/resume-gen/work">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Previous</Button>
    </Link>
  
   <Link to ="/resume-gen/skills">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Next</Button>
    </Link>
 
</div> );
}

export default ProjectForm;