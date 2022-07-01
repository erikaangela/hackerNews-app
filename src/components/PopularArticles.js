import React from "react";
import { useSelector } from "react-redux/es/exports";
import "../Articles.css";

const PopularArticles = () => {
  const articles = useSelector((state) => state.popArticles.articles.articles);
  const renderSidebar = (articles || []).map((article) => {
    const { title, url, urlToImage } = article;

    return (
      <div className="item centered" key={title}>
        <a href={url} target="_blank">
          <img className="ui large rounded image" src={urlToImage} />
          <div className="content">
            <div className="header">{title}</div>
          </div>
        </a>
      </div>
    );
  });

  return (
    <div className="ui middle aligned animated list">
      <h3 className="ui header">Popular This Week</h3>
      {renderSidebar}
    </div>
  );
};

export default PopularArticles;
