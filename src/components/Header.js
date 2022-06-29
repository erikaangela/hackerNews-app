import React from "react";
import Menu from "./Menu";
import "../Header.css";

const Header = () => {
  return (
    <div className="ui container">
      <div className="ui huge header">The Hacker News</div>
      <button className="ui right floated disabled yellow button">
        <i className="mail icon"></i>
        Subscribe to Newsletter
      </button>
      <Menu />
    </div>
  );
};

export default Header;
