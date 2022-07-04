import React from "react";
import { useSelector } from "react-redux/es/exports";
import "../Articles.css";

const Articles = () => {
  const articles = useSelector((state) => state.allArticles.articles.articles);
  const renderFeed = (articles || []).map((article) => {
    const { source, author, title, url, urlToImage, publishedAt, content } =
      article;
    const altDate = publishedAt.toString().substring(0, 10);

    return (
      <div className="item" key={title}>
        <div className="image">
          {urlToImage === null ? (
            <img
              className="ui large rounded image"
              src="https://semantic-ui.com/images/wireframe/image.png"
              alt="No image"
            />
          ) : (
            <img src={urlToImage} />
          )}
        </div>
        <div className="content">
          <a className="header" href={url} target="_blank">
            {title}
          </a>
          <div className="extra">
            <div>{altDate}</div>
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
