import React from "react";
import { useSelector } from "react-redux/es/exports";
import "../Articles.css";

const Articles = () => {
  const articles = useSelector((state) => state.allArticles.articles.articles);
  const renderFeed = (articles || []).map((article) => {
    const { source, author, title, url, urlToImage, publishedAt, content } =
      article;

    return (
      <div className="item" key={title}>
        <div className="image">
          <img
            src={urlToImage}
            onError={(e) => {
              if (e === null) {
                e.target.src = "image_path_here";
              }
            }}
          />
        </div>
        <div className="content">
          <a className="header" href={url} target="_blank">
            {title}
          </a>
          <div className="extra">
            <div>{publishedAt}</div>
            <div>{author}</div>
          </div>
          <div className="meta">
            <span>Source: {source.name}</span>
          </div>
          <div className="description">
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div className="ui divided items">{renderFeed}</div>;
};

export default Articles;
