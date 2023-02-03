import React from "react";
import Icons from "./Icons";
import "../Header.css";

const HeaderTopper = () => {
  return (
    <div className="ui secondary menu">
      <div className="item">
        <a className="disabled">Follow us</a>
      </div>
      <Icons className="item" icon="facebook" />
      <Icons className="item" icon="twitter" />
      <Icons className="item" icon="linkedin" />
      <Icons className="item" icon="youtube" />
    </div>
  );
};

export default HeaderTopper;
