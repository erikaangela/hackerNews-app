import React from "react";
import { useSelector } from "react-redux/es/exports";
import "../Articles.css";

const Articles = () => {
  const articles = useSelector((state) => state.allArticles.articles.articles);
  const renderFeed = (articles || []).map((article) => {
    const {
      source,
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content,
    } = article;

    return (
      <div className="item" key={title}>
        <div className="image">
          <img src={urlToImage} />
        </div>
        <div className="content">
          <a className="header">{title}</a>
          <div className="extra">
            <div>{publishedAt}</div>
            <div>{author}</div>
          </div>
          <div className="meta">
            <span></span>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  });
  return <div>{renderFeed}</div>;
};

export default Articles;
