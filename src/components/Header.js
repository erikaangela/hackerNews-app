import React from "react";
import Menu from "./Menu";
import HeaderTopper from "./HeaderTopper";
import "../Header.css";

const Header = () => {
  return (
    <div className="ui centered grid">
      <div className="row">
        <div className="left floated column">
          <HeaderTopper />
        </div>
      </div>
      <div className="four column row">
        <div className="left floated column">
          <div className="ui huge header">The Hacker News</div>
        </div>
        <div className="right floated column">
          <button className="ui right floated disabled yellow button">
            <i className="mail icon"></i>
            Subscribe to Newsletter
          </button>
        </div>
      </div>
      <div className="row">
        <Menu />
      </div>
    </div>
  );
};

export default Header;
