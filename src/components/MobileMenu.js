import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";

const MobileMenu = () => {
  return (
    <div className="ui menu">
      <Link className="home item" to="/">
        Home
      </Link>
      <div className="ui simple dropdown item">
        <div className="text">Categories</div>
        <i className="dropdown icon"></i>
        <div className="menu">
          <div className="item">Data Breaches</div>
          <div className="item">Cyber Attacks</div>
          <div className="item">Vulnerabilities</div>
          <div className="item">Malware</div>
          <div className="item">Offers</div>
          <div className="item">Contact</div>
        </div>
      </div>
      <Link to="/search" className="item">
        Search
      </Link>
    </div>
  );
};

export default MobileMenu;
