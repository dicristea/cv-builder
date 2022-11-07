import React, { useState } from "react";
import PropTypes from 'prop-types';
import "../../styles/InputField.css";

const TextareaField = ({label, name, id }) => {
    const [value, setValue] = useState('');

    return (
        <div className="input-box">
            <label className= {value && 'filled'} htmlFor={id}>{label}</label>
            <textarea 
                id={id}
                name= {name}
                value={value} 
                onChange={(e) => setValue(e.target.value)}
                rows='4' 
            />
        </div>
    )
}
TextareaField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default TextareaField;