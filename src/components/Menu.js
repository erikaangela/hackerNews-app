import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";

const Menu = () => {
  return (
    <div className="ui stackable menu">
      <Link className="home item" to="/">
        Home
      </Link>
      <a className="disabled item">Data Breaches</a>
      <a className="disabled item">Cyber Attacks</a>
      <a className="disabled item">Vulnerabilities</a>
      <a className="disabled item">Malware</a>
      <a className="disabled item">Offers</a>
      <a className="disabled item">Contact</a>
      <Link to="/search" className="item">
        Search
      </Link>
    </div>
  );
};

export default Menu;
