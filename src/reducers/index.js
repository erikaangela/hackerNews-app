import { combineReducers } from "redux";
import { articleReducer } from "./articleReducer";

const reducers = combineReducers({
  allArticles: articleReducer,
});

export default reducers;
