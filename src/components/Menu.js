import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";

const Menu = () => {
  return (
    <div className="ui stackable secondary menu">
      <div className="item">
        <Link className="home" to="/">
          Home
        </Link>
      </div>
      <div className="item">Data Breaches</div>
      <div className="item">Cyber Attacks</div>
      <div className="item">Vulnerabilities</div>
      <div className="item">Malware</div>
      <div className="item">Offers</div>
      <div className="item">Contact</div>
      <div className="item">
        <Link to="/search">
          <button className="ui blue button">Search</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
