import React, { useState } from "react";
import EducationList from "./EducationList";

const Education = () => {
 const [value, setValue] = useState("");

 return (
    <div className="education-box">
        <h3>Education {value}</h3>
        <EducationList />

        <button onClick={() => setValue(value + 1)}>
            Add
        </button>
    </div>
 )
 
}

export default Education;
