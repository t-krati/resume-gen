import { blue } from "@material-ui/core/colors";
import React from "react";

function Header(props) {

    const mystyle = {
        color: "black",
        textAlign: "center",
        fontFamily: "Times New Roman"
    }
    return <div style = {mystyle}>
        <h1>{props.inputs.firstName} {props.inputs.lastName}</h1> 
        <span><strong>email :</strong> {props.inputs.email}</span> <br />
        <span><strong>Phone :</strong> {props.inputs.phone}</span><br />
        <span><strong>Address</strong> : {props.inputs.address}</span><br />
    </div>
}
export default Header;