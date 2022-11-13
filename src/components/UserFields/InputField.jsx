import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/UserFields.css";

const InputField = ({ type, label, id, title, pattern, isPreviewActive }) => {
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
      <input
        type={type}
        id={id}
        name={id}
        title={title}
        pattern={pattern}
        value={value}
        onChange={(e) => setValue(e.target.value)}
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

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  pattern: PropTypes.string,
  isPreviewActive: PropTypes.bool.isRequired,
};

export default InputField;
