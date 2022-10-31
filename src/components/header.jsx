import React from "react";
import CVicon from "../assets/CV-header.png";
import "../styles/index.css"

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <img src={CVicon} alt="CV logo" />
        <h1>CV Builder</h1>
      </header>
      <button>Preview CV</button>
    </div>
  );
};

export default Header;
