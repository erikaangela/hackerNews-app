import { ActionTypes } from "./types";

export const setArticles = (articles) => {
  return {
    type: ActionTypes.SET_ARTICLES,
    payload: articles,
  };
};

export const selectedArticle = (article) => {
  return {
    type: ActionTypes.SELECTED_ARTICLE,
    payload: article,
  };
};
