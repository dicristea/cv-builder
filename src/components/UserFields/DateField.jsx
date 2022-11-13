import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/UserFields.css";

const DateField = ({ label, name, id, isPreviewActive }) => {
  const [value, setValue] = useState("");

  // if (value == new Date()) {
  //     value = 'present'
  // }

  return (
    <div className="date-box">
      <label className="date-label" htmlFor={id}>
        {label}
      </label>

      {isPreviewActive ? (
        value
      ) : (
        <input
          type="month"
          id={id}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
    </div>
  );
};
DateField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isPreviewActive: PropTypes.bool.isRequired,
};

export default DateField;
