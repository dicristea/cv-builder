import React, { useState } from "react";
import PropTypes from 'prop-types';
import "../../styles/InputField.css";

const DateField = ({ label, name, id }) => {
    const [value, setValue] = useState('');

    // if (value == new Date()) {
    //     value = 'present'
    // }

    return (
        <div className="date-box">
            <label htmlFor={id}>{label}</label>
            <input 
                type="month"
                id={id}
                name= {name}
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />
        </div>
    )
}
DateField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default DateField;