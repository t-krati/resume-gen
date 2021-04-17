import './App.css';
import BasicDetails from "./Components/BasicDetails";
import Template from "./Components/Template1";
import { Route , BrowserRouter as Router } from "react-router-dom";
import React from "react";
import useSignUpForm from "./Components/CustomHooks";
import InfoForm from "./Components/InfoForm";
import EducationForm from "./Components/EducationForm";
import WorkForm from "./Components/WorkForm";
import ProjectForm from "./Components/ProjectForm";
import SkillForm from "./Components/SkillForm";
import validate from "./Components/validateForm";

function App() {

  const {inputs, handleInputChange, handleSubmit, handleDynamicAddition, handleDynamicRemoval,handleInputArrayChange,errors} = useSignUpForm(() => {},validate);
  
  return <Router>

     <div className = "headerStyle" >Enter Your Details</div>

     <Route path = {"/resume-gen"} exact>
      <BasicDetails inputs = {inputs} handleInputChange = {handleInputChange}
        handleSubmit = {handleSubmit} />
    </Route>

     <Route path = {"/resume-gen/info"} exact>
      <InfoForm inputs = {inputs} handleInputChange = {handleInputChange}
        handleSubmit = {handleSubmit} errors = {errors} />
    </Route>
    
    <Route path = "/resume-gen/education">
      <EducationForm inputs = {inputs} handleInputChange = {handleInputChange}
        handleSubmit = {handleSubmit} handleDynamicAddition = {handleDynamicAddition} 
        handleDynamicRemoval = {handleDynamicRemoval}
        handleInputArrayChange = {handleInputArrayChange} errors = {errors}
        />
      </Route>
    
    <Route path = "/resume-gen/work">
      <WorkForm inputs = {inputs} handleInputChange = {handleInputChange}
        handleSubmit = {handleSubmit} handleDynamicAddition = {handleDynamicAddition} 
        handleDynamicRemoval = {handleDynamicRemoval}
        handleInputArrayChange = {handleInputArrayChange} errors = {errors}
        />
    </Route>

    <Route path = "/resume-gen/project">
      <ProjectForm inputs = {inputs} handleInputChange = {handleInputChange}
        handleSubmit = {handleSubmit} handleDynamicAddition = {handleDynamicAddition}
        handleDynamicRemoval = {handleDynamicRemoval}
        handleInputArrayChange = {handleInputArrayChange} errors = {errors}
        />
     </Route>
    
    <Route path = "/resume-gen/skills">
      <SkillForm inputs = {inputs} handleInputChange = {handleInputChange}
        handleSubmit = {handleSubmit} handleDynamicAddition = {handleDynamicAddition}
        handleDynamicRemoval = {handleDynamicRemoval}
        handleInputArrayChange = {handleInputArrayChange} errors = {errors}
        />
    </Route>

    <Route path = "/resume-gen/myresume" >
        <Template inputs = {inputs}/>
    </Route>

    </Router>
}

export default App;
