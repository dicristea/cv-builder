import React from "react";
import InputField from "./UserFields/InputField";

const Info = () => {

    return (
        <div className="info-box">
            <h3>Introduction</h3>
            <div className="info-input-box">
                <InputField
                    type='text'
                    label='Full Name'
                    id='fullname'
                    title= 'Please enter your full name.'
                />
                <InputField
                    type='email'
                    label='E-mail'
                    id='email'
                    title= "Please enter a valid email."
                />
                <InputField
                    type='tel'
                    label='Phone Number'
                    id='phone'
                    pattern='^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$'
                    title= "Please enter a valid phone number."
                />
                <InputField
                    type='text'
                    label='City, State'
                    id='location'
                    title= "Please enter a valid location."
                />
                <InputField
                    type='text'
                    label='LinkedIn'
                    id='linkedin'
                    title= "Please enter a valid Linkedin URL."
                />
            </div>

        </div>
    )
 
}

export default Info;
