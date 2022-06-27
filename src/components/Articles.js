import React from "react";
import { useSelector } from "react-redux/es/exports";

const Articles = () => {
  const articles = useSelector((state) => state.allArticles.articles);
  const { id, title } = articles[0];

  return (
    <div className="item">
      <div className="image">
        <img src="/images/wireframe/image.png" />
      </div>
      <div className="content">
        <a className="header">Title</a>
        <div className="extra">
          <div>Date</div>
          <div>Author</div>
        </div>
        <div className="meta">
          <span>Description</span>
        </div>
        <div className="description">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Articles;
