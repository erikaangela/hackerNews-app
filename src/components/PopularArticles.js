import React from "react";
import { useSelector } from "react-redux/es/exports";
import "../Articles.css";

const PopularArticles = () => {
  const articles = useSelector((state) => state.popArticles.articles.articles);
  const renderSidebar = (articles || []).slice(0, 6).map((article) => {
    const { title, url, urlToImage } = article;

    return (
      <div className="popular item centered" key={title}>
        <a href={url} target="_blank">
          {urlToImage === null ? (
            <img
              className="ui large rounded image"
              src="https://semantic-ui.com/images/wireframe/image.png"
              alt="No image"
            />
          ) : (
            <img className="ui large rounded image" src={urlToImage} />
          )}
          <div className="popular content">
            <div className="header">{title}</div>
          </div>
        </a>
      </div>
    );
  });

  return (
    <div className="ui animated list">
      <h3 className="popular ui header">Popular This Week</h3>
      {renderSidebar}
    </div>
  );
};

export default PopularArticles;
