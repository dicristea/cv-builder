import React from "react";
import DateField from "./UserFields/DateField";
import InputField from "./UserFields/InputField";
import TextareaField from "./UserFields/TextareaField";

const EducationList = () => {

    return (
        <div className="list-box">
            <InputField 
                type='text'
                label='School'
                name='school'
                id='school'
            />
            <InputField 
                type='text'
                label='Certification'
                name='certification'
                id='certification'
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

export default EducationList;
