import { ActionTypes } from "./types";

export const setArticles = (articles) => {
  return {
    type: ActionTypes.SET_ARTICLES,
    payload: articles,
  };
};

export const setPopArticles = (articles) => {
  return {
    type: ActionTypes.SET_POP_ARTICLES,
    payload: articles,
  };
};
