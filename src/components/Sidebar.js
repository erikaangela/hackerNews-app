import React from "react";
import PopularArticles from "./PopularArticles";

const Sidebar = () => {
  return (
    <div className="ui large middle aligned animated list">
      <h3 className="ui header">Popular This Week</h3>
      <PopularArticles description="This is the first article." />
      <PopularArticles description="This is the second article." />
      <PopularArticles description="This is the third article." />
      <PopularArticles description="This is the fourth article." />
      <PopularArticles description="This is the fifth article." />
      <PopularArticles description="This is the sixth article." />
    </div>
  );
};

export default Sidebar;
