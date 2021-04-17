 function validateBasicInfo(inputs,errors) {
    if(!inputs.email)
        errors.email =  "Email is required.";
     else if (!/\S+@\S+\.\S+/.test(inputs.email))
     errors.email = "Invalid email entered.";
     
     if(!inputs.firstName)
      errors.firstName = "First Name is required.";

      if(!inputs.lastName)
      errors.lastName = "Last Name is required.";

      if(!inputs.address)
      errors.address = "Address is required.";

 }
 function validateEducationInfo(educationInfos, errors) {
        errors.educationInfos.length = educationInfos.length;
        for(var i = 0; i < educationInfos.length; i++) {
            let edu = {};
          if(!educationInfos[i].college)
            edu.college = "Please enter college."; 

          if(!educationInfos[i].degree)
            edu.degree = "Please enter degree.";

          if(!educationInfos[i].collegeStart)
            edu.collegeStart = "Please enter start date.";

          if(!educationInfos[i].collegeEnd)
            edu.collegeEnd = "Please enter end date.";

          errors.educationInfos[i] = edu;
        }
        return errors.educationInfos;  
     
 }

 function validateWorkInfo(workInfos,errors) {
    for(var i = 0; i < workInfos.length; i++) {
        let work = {};
        if(!workInfos[i].company)
            work.company = "Please enter company";
        if(!workInfos[i].role)
            work.role = "Please enter role";
        if(!workInfos[i].workStart)
            work.workstart = "Please enter start date";
        if(!workInfos[i].workEnd)
            work.workend = "Please enter end date";
        errors.workInfos[i] = work;
    }
    return errors.workInfos;
 }

 function validateProjects(projects,errors) {
    for(var i = 0; i < projects.length; i++) {
        let project = {};
        if(!projects[i].projectTitle)
            project.projectTitle = "Please enter project title";
        if(!projects[i].projectDescription)
            project.projectDescription = "Please enter project description";
        if(!projects[i].projectStart)
            project.projectStart = "Please enter start date";
        if(!projects[i].projectEnd)
            project.projectEnd = "Please enter end date";
        errors.projects[i] = project;
    }
    return errors.projects;
 }

 function validateSkills(skills,errors) {
    for(var i = 0; i < skills.length; i++) {
        let skill = {};
        if(!skills[i].skillName)
            skill.skillName = "Please enter a skill name.";
        if(!skills[i].skillLevel)
            skill.skillLevel = "Please enter skill level.";
       
        errors.skills[i] = skill;
    }
    return errors.skills;
 }
 
 export default function validateForm(inputs,section,errors) {
     let newErrors = {basicInfo : {}, 
     educationInfos : [{}],
     workInfos: [{}],
     projects: [{}],
     skills : [{}]
    };
     
     if(section === "basicInfo") {
        validateBasicInfo(inputs, newErrors);
        newErrors = {...errors, firstName: newErrors.firstName,
                        lastName: newErrors.lastName,
                        email: newErrors.email,
                        address: newErrors.address};
     }
    if(section === "educationInfos") {
       newErrors.educationInfos = validateEducationInfo(inputs.educationInfos,newErrors);
       newErrors = {...errors,educationInfos : newErrors.educationInfos};
       
    }

    if(section === "workInfos") {
        newErrors.workInfos = validateWorkInfo(inputs.workInfos,newErrors);
        newErrors = {...errors,workInfos : newErrors.workInfos};
    }

    if(section === "projects") {
        newErrors.projects = validateProjects(inputs.projects,newErrors);
        newErrors = {...errors,projects : newErrors.projects};
    }

    if(section === "skills") {
        newErrors.skills = validateSkills(inputs.skills,newErrors);
        newErrors = {...errors,skills : newErrors.skills};
    }
     
    return newErrors;


 }