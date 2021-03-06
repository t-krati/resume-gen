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
return <div>  <SubHeading text = "Skills" />
    {props.skills.map((skill,index) => {
        return <div key = {index}>    
        <span>{skill.skillName} </span>
        <span style = {{width: "10%"}}></span>
        <span> {showRating(skill.skillLevel)}</span></div>
    })}
    
</div>
}
export default Skill;