import React, { useState } from "react";
import PropTypes from 'prop-types';
import "../../styles/InputField.css";

const InputField = ({ type, label, id, title }) => {
    const [value, setValue] = useState('');

    return (
        <div className="input-box">
            <label className= {value && 'filled'} htmlFor={id}>{label}</label>
            <input 
                type={type}
                id={id}
                name= {id}
                title= {title}
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
            />
        </div>
    )
}
InputField.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default InputField;