import React from "react";
import { createRoot } from "react-dom/client";
import { createStore, applyMiddleware, compose } from "redux";

// import { thunk as reduxThunk } from "redux-thunk";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import "./index.css";
import App from "./App";
import reducers from "./reducers";
import empSaga from "./sagas/empSaga";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootEle = document.getElementById("root");
const root = createRoot(rootEle);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(empSaga);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
