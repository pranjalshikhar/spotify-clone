import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./utils/StateProvider";
import reducer, { initialState } from "./utils/reducer";
import { Provider } from "react-redux";
import store from "./app/store";
// const reducer = require("./utils/reducer");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  // </Provider>
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
);
