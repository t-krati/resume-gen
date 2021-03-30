import React from "react";
import Header from "./Header";
import Body from "./Body";

const Template1 = (props) => {

    const mystyle = {
        size: "A4",
        borderStyle: "2px solid black",
        marginLeft: "20px",
        marginRight: "20px",
        paddingLeft: "40px",
        paddingRight: "40px"
    }
    return <div style = {mystyle}>
            <Header details = {props.inputs} />
            <Body details = {props.inputs} />
    </div>;

}
export default Template1; 