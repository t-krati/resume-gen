import React from "react";
import Header from "./Header";
import Body from "./Body";

const Template1 = (props) => {

    const mystyle = {
        size: "A4",
        height: "1000px",
        padding: "50px",
        borderStyle: "2px solid black",
        background: "white",
        marginLeft: "10%",
        marginRight: "10%",
        paddingLeft: "60px",
        paddingRight: "60px"
    }
    return <div style = {mystyle}>
            <Header style = {{height: "20%"}} details = {props.inputs} />
            <Body details = {props.inputs} />
        </div> 
    ;

}
export default Template1; 