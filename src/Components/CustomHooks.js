import React, {useState} from "react";

const useSignUpForm = (callback) => {
    
    const [inputs, setInputs] = useState({ basicInfo : {}, 
                                        educationInfos : [{}],
                                        workInfos: [{}],
                                        projects: [{}],
                                        skills : [{}]});
    const handleSubmit = (event) => {
        if(event) {
            event.preventDefault();
        }
        callback();
    }; 

    const handleInputChange = (event) => {
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      }

    const handleInputArrayChange = (section,index,event) => {
        const tempsection = inputs[section];
        tempsection[index][event.target.name] = event.target.value;
        setInputs(inputs => ({...inputs, [section]: tempsection}));

    }


    const handleDynamicAddition = (event) => {
        const {name} = event.currentTarget;
        setInputs((inputs) => ({...inputs, [name] : [...inputs[name], {}]}));
    }
    
    const handleDynamicRemoval = (event) => {
        const {name} = event.currentTarget;
        const temp = inputs[name];
        temp.pop();
        setInputs((inputs) => ({...inputs, [name] : temp}));
    }

    return {
        inputs,
        handleInputChange,
        handleSubmit,
        handleDynamicAddition,
        handleDynamicRemoval,
        handleInputArrayChange    
      };
} 

export default useSignUpForm;