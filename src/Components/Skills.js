import React from "react";
import SubHeading from "./SubHeading";

function Skill(props) {

    function showRating(n) {
        var rating = "";
        for(var i = 1; i <= 5; i++) {
            if(i <= n)
                rating += " ★ ";
            else
                rating += " ☆ ";
        }
        
        return <span>{rating}</span>;

    }
return <div>
    <SubHeading text = "Skills" />
    <span>{props.details.skill} </span>
    <span style = {{width: "10%"}}></span>
    <span> {showRating(props.details.skilllevel)}</span>
</div>
}
export default Skill;