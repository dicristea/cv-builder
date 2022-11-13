import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/UserFields.css";

const TextareaField = ({ label, name, id, isPreviewActive }) => {
  const [value, setValue] = useState("");

  return (
    <div className="input-box">
      <label
        className={value && "filled"}
        htmlFor={id}
        style={{ display: isPreviewActive ? "none" : "block" }}
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows="4"
        style={
          isPreviewActive
            ? {
                border: "none",
                fontSize: "1.2em",
              }
            : {}
        }
      />
    </div>
  );
};
TextareaField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isPreviewActive: PropTypes.bool.isRequired,
};

export default TextareaField;
