import { ActionTypes } from "../actions/types";

const initialState = {
  articles: [{ id: 1, title: "Erika", category: "programmer" }],
};

export const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ARTICLES:
      return state;
    default:
      return state;
  }
};
