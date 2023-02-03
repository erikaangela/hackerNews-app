import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { setPopArticles } from "../actions";
import PopularArticles from "./PopularArticles";

const Sidebar = () => {
  const dispatch = useDispatch();

  const fetchArticles = async () => {
    const response = await axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=0cb60408b3164a208d87a23aed538419"
      )
      .catch((err) => {
        console.log("Sidebar Error", err);
      });
    dispatch(setPopArticles(response.data));
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return <PopularArticles />;
};

export default Sidebar;
