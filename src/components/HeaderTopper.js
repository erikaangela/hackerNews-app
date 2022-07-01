import React from "react";
import Icons from "./Icons";

const HeaderTopper = () => {
  return (
    <div className="ui secondary menu">
      <div className="right menu">
        <div className="item">
          <a className="disabled">Follow us</a>
        </div>
        <Icons icon="facebook" />
        <Icons icon="twitter" />
        <Icons icon="linkedin" />
        <Icons icon="youtube" />
      </div>
    </div>
  );
};

export default HeaderTopper;
