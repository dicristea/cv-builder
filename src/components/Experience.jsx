import React, {useState} from "react";
import ExperienceList from "./ExperienceList";

const Experience = () => {
 const [value, setValue] = useState('');

 return (
    <div className="experience-box">
        <h3>Experience {value}</h3>
        <ExperienceList />
        <button onClick={() => setValue(value + 1)}>
            Add Experience
        </button>
    </div>
 )
 
}

export default Experience;
