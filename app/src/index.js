// needed for async await
// babel/polyfill deprecated

import "semantic-ui-css/semantic.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import configureStore from "./js/store/configureStore";
import { history } from "./js/store/history";
import App from "./js/components/presentational/App";

import "./index.scss";

const store = configureStore(history);
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router history={history}>
        <Switch>
          <Route path="/:filter?" component={App} />
        </Switch>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
