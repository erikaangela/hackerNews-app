import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Articles.css";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    // if (term !== ""){}
    const search = async () => {
      const { data } = await axios
        .get(
          `https://newsapi.org/v2/everything?q=${term}&apiKey=0cb60408b3164a208d87a23aed538419`
        )
        .catch((err) => {
          console.log("Search Error", err);
        });
      console.log(data.articles);
      console.log(setResults(data.articles));
    };

    search();

    // return () => {
    //   setTerm("");
    // };
  }, [debouncedTerm]);

  const renderedResults = (results || []).slice(0, 20).map((result) => {
    const { source, author, title, url, urlToImage, publishedAt, content } =
      result;
    const altDate = publishedAt.toString().substring(0, 10);

    return (
      <div className="item" key={url}>
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

  return (
    <div>
      <div className="ui icon input">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search..."
        />
        <i className="search link icon" onClick={setTerm(() => "")}></i>
      </div>
      <p className="results number">Showing 20 out of 20 results</p>
      <div className="ui divided items">{renderedResults}</div>
    </div>
  );
};

export default Search;
