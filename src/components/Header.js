import React from "react";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="ui container">
      <div className="ui secondary pointing menu">
        <h1 className="ui header">The Hacker News</h1>
      </div>
      <Menu />
    </div>
  );
};

export default Header;
