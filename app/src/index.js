// needed for async await
// babel/polyfill deprecated

import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/presentational/App";

import "./index.scss";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
