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
      <a className="item">Data Breaches</a>
      <a className="item">Cyber Attacks</a>
      <a className="item">Vulnerabilities</a>
      <a className="item">Malware</a>
      <a className="item">Offers</a>
      <a className="item">Contact</a>
      <div className="item">
        <Link to="/search">
          <button className="ui blue button">Search</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
