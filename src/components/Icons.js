import React from "react";

class Icons extends React.Component {
  render() {
    return (
      <div className="item">
        <a>
          <i className={`ui icon ${this.props.icon}`}></i>
        </a>
      </div>
    );
  }
}

export default Icons;
