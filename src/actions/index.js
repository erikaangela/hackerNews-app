import { ActionTypes } from "./types";

export const setArticle = (articles) => {
  return {
    type: ActionTypes.SET_ARTICLES,
    payload: articles,
  };
};

export const selectedArticles = (article) => {
  return {
    type: ActionTypes.SELECTED_ARTICLE,
    payload: article,
  };
};
