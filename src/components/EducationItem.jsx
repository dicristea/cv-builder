import React from "react";
import Button from "./UserFields/Button";
import DateField from "./UserFields/DateField";
import InputField from "./UserFields/InputField";
import TextareaField from "./UserFields/TextareaField";

const EducationItem = () => {

    return (
        <div className="list-box">
            <div className="list-header">
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
            </div>
            <div className="list-date">
                <DateField
                    label='From '
                    name='start-date'
                    id='start-date'
                />
                <DateField
                    label='To '
                    name='end-date'
                    id='end-date'
                />
            </div>
            <div className="list-options">
                <TextareaField
                    label='Description'
                    name='description'
                    id='description'
                />
                <Button className='deleteButton' text='Delete' />
            </div>
        </div>
    )
 
}

export default EducationItem;
