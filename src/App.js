import logo from './logo.svg';
import './App.css';
import BasicDetails from "./Components/BasicDetails";
import Template from "./Components/Template1";
import { Route , BrowserRouter as Router } from "react-router-dom";
import React, {useState} from "react";
import useSignUpForm from "./Components/CustomHooks";
function App() {

  const {inputs, handleInputChange, handleSubmit} = useSignUpForm({});
  return <Router>
      <Route path = "/" 
            component = {BasicDetails} 
            render = {(props) => <BasicDetails handleInputChange = {handleInputChange} 
                                                handleSubmit = {handleSubmit} 
                                                inputs = {inputs}/>} 
            exact/> 
      <Route path = "/resume" 
            component = {Template} 
          render = {(props) => <Template inputs = {inputs} />}
      /> 
    </Router>
}

export default App;
