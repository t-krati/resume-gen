import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { Link } from "react-router-dom";
import "./FormStyle.css";
import { TextareaAutosize } from "@material-ui/core";

function SkillForm(props) {

  const buttonStyle = {
    background: "pink",
    margin: "5px",
    float: "left"
  }

    return (<div class = "skills"  className = "section" ><h3>Skills</h3>
    
    {props.inputs.skills.map((skill,index) => {
      return <div>
      <TextField className = "TextField" margin = "normal" label = "Skill" variant="outlined"  type="text" name="skillname" onChange={(event) => props.handleInputArrayChange("skills",index,event)} value={skill.skillname} 
      required />
      <FormControl>
      <InputLabel id="demo-simple-select-label">Skill Level</InputLabel>
      <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      name="skilllevel"
      value={skill.skilllevel}
      onChange={(event) => props.handleInputArrayChange("skills",index,event)}
>
      <MenuItem value={1}>Beginner</MenuItem>
      <MenuItem value={2}>Intermediate</MenuItem>
      <MenuItem value={3}>Good</MenuItem>
      <MenuItem value={4}>Very Good</MenuItem>
      <MenuItem value={5}>Expert</MenuItem>
      </Select>
      </FormControl>
      </div>
    })}
    
    <Button className = "button" variant="contained" name = "skills" color="secondary" style = {buttonStyle} onClick = {props.handleDynamicAddition} >+</Button>
    <Button className = "button" variant="contained" name = "skills" color="secondary" style = {buttonStyle} onClick = {props.handleDynamicRemoval} >-</Button>
  <Link to ="/resume-gen/project">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Previous</Button>
    </Link>
  
   <Link to ="/resume-gen/myresume">
    <Button className = "button" variant="contained" color="secondary" style = {buttonStyle}>Next</Button>
    </Link>
</div> );
}

export default SkillForm;