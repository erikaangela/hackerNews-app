import React from "react";

class PopularArticles extends React.Component {
  render() {
    return (
      <div className="item">
        <img className="ui avatar image" src="/images/avatar/small/helen.jpg" />
        <div className="content">
          <div className="header">{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default PopularArticles;
