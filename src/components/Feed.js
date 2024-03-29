import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux/es/exports";
import { setArticles } from "../actions";
import Articles from "./Articles";

const Feed = () => {
  const dispatch = useDispatch();

  const fetchArticles = async () => {
    const response = await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=0cb60408b3164a208d87a23aed538419"
      )
      .catch((err) => {
        console.log("Feed Error", err);
      });
    dispatch(setArticles(response.data));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return <Articles />;
};

export default Feed;
