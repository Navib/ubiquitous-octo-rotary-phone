import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import articles from "../reducers/index";

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    articles
  });
export default createRootReducer;
