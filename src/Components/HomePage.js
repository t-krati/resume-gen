import React from "react";
import "./FormStyle.css";
import { Link } from "react-router-dom";

function HomePage(props) {

    const buttonStyle = {
      background: "#3D72A1",
      margin: "5px",
      float: "left"
    }

    const divStyle = {
      background: '#3D72A1',
      color: "white",
      alignItems: "center",
      textAlign: "center",
      width: "33.33%",
      borderRadius: "2%",
      padding: "5px",
      marginLeft: "33.33%"
    }

    return <div style = {{background : 'whitesmoke',textAlign: 'center', paddingBottom: '32px'}}>
    <h1 style = {{fontSize : 60, paddingTop: '20px'}}>Create a resume for free!</h1>
    <Link to = "/resume-gen/info" style={{ textDecoration: 'none' }}><div style = {divStyle}>
    <h1 >Start Here</h1>
    <form onSubmit = {props.handleSubmit} className = "formStyle">
    </form></div>
    </Link></div>
  
  
}

export default HomePage;
