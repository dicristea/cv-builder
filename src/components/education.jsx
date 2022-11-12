import React, { useState } from "react";
import EducationItem from "./EducationItem";
import Button from "./UserFields/Button";


const Education = () => {
    const [educationList, setEducationList] = useState(['']);

    const addEducationItem = () => {
        setEducationList([...educationList, <EducationItem key={educationList.length} />])
    };

 return (
    <div className="education-box">
        <h3>Education</h3>

        {educationList}
        <Button onClick={addEducationItem} text='Add Education' className='addButton'/>
    </div>
 )
 
}

export default Education;
