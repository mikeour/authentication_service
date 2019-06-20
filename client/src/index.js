import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App.jsx";

const targetEl = document.getElementById("root");

render(
  <Router>
    <App />
  </Router>,
  targetEl
);
