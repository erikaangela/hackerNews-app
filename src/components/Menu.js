import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import "../Header.css";

const Menu = () => {
  return (
    <div className="ui secondary menu">
      <div className="item">
        <Link className="home" to="/">
          Home
        </Link>
      </div>
      <a className="disabled item">Data Breaches</a>
      <a className="disabled item">Cyber Attacks</a>
      <a className="disabled item">Vulnerabilities</a>
      <a className="disabled item">Malware</a>
      <a className="disabled item">Offers</a>
      <a className="disabled item">Contact</a>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input
              type="text"
              placeholder="Search..."
              // onChange={(e) => this.props.setSearch(e.target.value)}
            />
            <i className="search link icon"></i>
          </div>
        </div>
        <div className="item">
          <div className="ui icon buttons">
            <button className="ui disabled button">
              <i className="dropdown icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
