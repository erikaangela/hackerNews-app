import React from "react";

class Icons extends React.Component {
  render() {
    return (
      <div className="item">
        <a className="disabled">
          <i className={`ui icon ${this.props.icon}`}>{this.props.text}</i>
        </a>
      </div>
    );
  }
}

export default Icons;
