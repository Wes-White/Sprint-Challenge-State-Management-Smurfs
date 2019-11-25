import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(reducer, applyMiddleware(logger, thunk));
ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
