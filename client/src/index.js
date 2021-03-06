import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./shared/context/";
import App from "./components/App/";

const target = document.getElementById("root");

render(
  <AuthProvider>
    <Router>
      <App />
    </Router>
  </AuthProvider>,
  target
);
