import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App score={0} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
