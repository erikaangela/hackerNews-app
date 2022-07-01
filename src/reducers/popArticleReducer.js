import { ActionTypes } from "../actions/types";

const initialState = {
  articles: [],
};

export const popArticleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POP_ARTICLES:
      return { ...state, articles: payload };
    default:
      return state;
  }
};
