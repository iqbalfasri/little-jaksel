import React from "react";
import ReactDOM from "react-dom";

// Load App
import App from "./App";

// Import React Router
import { BrowserRouter as Router } from "react-router-dom";

// Load css
import "./static/css/style.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
