import { blue } from "@material-ui/core/colors";
import React from "react";

function Header(props) {

    const mystyle = {
        color: "black",
        textAlign: "center",
        borderBottom :"2px solid black",
        borderImage: "linear-gradient(to right)"
    }
    return <div style = {mystyle}>
        <h1>{props.details.firstName} {props.details.lastName}</h1> 
        <span><strong>email :</strong> {props.details.email}</span> <br />
        <span><strong>Phone :</strong> {props.details.phone}</span><br />
        <span><strong>Address</strong> : {props.details.address}</span><br />
    </div>
}
export default Header;