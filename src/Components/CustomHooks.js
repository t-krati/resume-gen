import {useState} from "react";

const useSignUpForm = (callback,validate) => {
    
    const [inputs, setInputs] = useState({ firstName: "",
                                        lastName: "",
                                        email : "",
                                        address : "", 
                                        educationInfos : [{}],
                                        workInfos: [{}],
                                        projects: [{}],
                                        skills : [{}]});
 
    const [errors,setErrors] = useState({firstName: "",
    lastName: "",
    email : "",
    address : "", 
    educationInfos : [{}],
    workInfos: [{}],
    projects: [{}],
    skills : [{}]});  

    const handleSubmit = (event,section) => {
        if(event) {
            event.preventDefault();
            setErrors(validate(inputs,section,errors));
        }
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
        handleInputArrayChange,
        errors    
      };
} 

export default useSignUpForm;