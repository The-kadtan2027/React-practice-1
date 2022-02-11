import React from "react";
import logo from "../images/logo.png"

const Header = () => {
  return (
    <header className="nav">
      <div className="logo-text">
        <img src={logo} className="logo" alt="react-logo" />
        <h3>ReactFacts</h3>
      </div>
      <h4 className="project">React-course Project-1</h4>
    </header>
  );
};
export default Header;
