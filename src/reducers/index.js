import { combineReducers } from "redux";
import { articleReducer } from "./articleReducer";
import { popArticleReducer } from "./popArticleReducer";

const reducers = combineReducers({
  allArticles: articleReducer,
  popArticles: popArticleReducer,
});

export default reducers;
