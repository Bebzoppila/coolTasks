import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./store/store"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./style/fonts/ptserif.css"
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
