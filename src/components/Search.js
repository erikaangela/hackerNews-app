import React, { useState } from "react";
import Menu from "./Menu";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState();

  //   function handleSetSearch(e) {
  //     setSearch(e.target.value);
  //   }

  //   const renderedResults = results.map((result) => {
  //     return (
  //       <div className="item" key={title}>
  //         <div className="image">
  //           <img src={urlToImage} />
  //         </div>
  //         <div className="content">
  //           <a className="header" href={url} target="_blank">
  //             {title}
  //           </a>
  //           <div className="extra">
  //             <div>{publishedAt}</div>
  //             <div>{author}</div>
  //           </div>
  //           <div className="meta">
  //             <span>Source: {source.name}</span>
  //           </div>
  //           <div className="description">
  //             <p>{content}</p>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   });
  return <div>Search</div>;
};

export default Search;
