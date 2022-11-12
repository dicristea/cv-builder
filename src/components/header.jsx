import React from "react";
import CVicon from "../assets/CV-header.png";
import "../styles/index.css"
import ToggleButton from "./UserFields/ToggleButton";

const Header = () => {    

  return (
    <div className="header-container">
      <header>
        <img src={CVicon} alt="CV logo" />
        <h1>CV Builder</h1>
      </header>
      <div className="preview-box">
        Preview Mode
        <ToggleButton onChange={state => console.log(state)}/>
      </div>
    </div>
  );
};

export default Header;
