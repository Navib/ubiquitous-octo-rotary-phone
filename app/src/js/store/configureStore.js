import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import createRootReducer from "../reducers/reducers";
import apiSaga from "../sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function configureStore(history) {
  const store = createStore(
    createRootReducer(history),
    storeEnhancers(
      applyMiddleware(routerMiddleware(history), initialiseSagaMiddleware)
    )
  );

  initialiseSagaMiddleware.run(apiSaga);
  return store;
}
