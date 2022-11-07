import React from "react";
import InputField from "./UserFields/InputField";
import DateField from "./UserFields/DateField";
import TextareaField from "./UserFields/TextareaField";

const ExperienceList = () => {

 return (
    <div className="list-box">
        <InputField
            label='Company'
            name='company'
            id='company'
        />
        <InputField
            label='Title'
            name='title'
            id='title'
        />
        <div className="date-container">
            <DateField
                label='Start Date: '
                name='start-date'
                id='start-date'
            />
            <DateField
                label='End Date: '
                name='end-date'
                id='end-date'
            />
        </div>
        <TextareaField 
            label='Description'
            name='description'
            id='description'
        />
    </div>
 )
 
}

export default ExperienceList;
