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
      
    <TextField className = "TextField" margin = "normal" label = "Project Title" variant="outlined"  type="text" name="projecttitle" onChange={props.handleInputChange} value={props.inputs.projecttitle}required />

    <TextareaAutosize 
      style = {{width: "50%"}}
      rowsMin = {10}
      placeholder="Describe your Project"
      name="projectdescription" 
      onChange={props.handleInputChange} 
      value={props.inputs.projectdescription}
    />

<TextField className = "Textfield " margin = "normal" label = "Start" type="date" variant="outlined" name="projectstart" onChange={props.handleInputChange} value={props.inputs.projectstart} />
     
     <TextField className = "Textfield " margin = "normal" label = "End" type="date" variant="outlined" name="projectend" onChange={props.handleInputChange} value={props.inputs.projectend}
      />

    <Link to ="/resume-gen/work">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Previous</Button>
    </Link>
  
   <Link to ="/resume-gen/skills">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Next</Button>
    </Link>
 
</div> );
}

export default ProjectForm;