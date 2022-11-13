import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      id="btn"
      className={props.className}
      onClick={props.onClick}
      style={props.style}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default Button;
