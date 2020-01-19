import { DATA_REQUESTED, ADD_ARTICLE } from "../constants/action-types";

export function getData() {
  return { type: "DATA_REQUESTED" };
}

export function addArticle(article) {
  return { type: ADD_ARTICLE, payload: article };
}
