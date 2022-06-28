import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setArticles } from "../actions";
import Articles from "./Articles";

const Feed = () => {
  const articles = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchArticles = async () => {
    const response = await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=0cb60408b3164a208d87a23aed538419"
      )
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setArticles(response.data));
  };

  useEffect(() => {
    fetchArticles();
  }, []);
  console.log("Articles :", articles);

  return (
    <div className="ui items">
      <Articles />
    </div>
  );
};

export default Feed;
