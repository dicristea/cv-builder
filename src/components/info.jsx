import React from "react";
import InputField from "./UserFields/InputField";

const Info = () => {

    return (
        <div className="info-box">
            <h3>Introduction</h3>
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
    )
 
}

export default Info;
