import React from "react";
import CVicon from "../assets/CV-header.png";
import "../styles/index.css";
import ToggleButton from "./UserFields/ToggleButton";
import PropTypes from "prop-types";

const Header = ({ onChange }) => {
  const onPreviewChange = (toggle) => {
    if (typeof onChange === "function") {
      onChange(toggle);
    }
  };

  return (
    <div className="header-container">
      <header>
        <img src={CVicon} alt="CV logo" />
        <h1>CV Builder</h1>
      </header>
      <div className="preview-box">
        Preview Mode
        <ToggleButton onChange={(toggle) => onPreviewChange(toggle)} />
      </div>
    </div>
  );
};

Header.propTypes = {
  onChange: PropTypes.func,
};

export default Header;
