import React from "react";
import ReactDOM from "react-dom";

// Load App
import App from "./App";

// Import React Router
import { BrowserRouter as Router } from "react-router-dom";

// Load css
import "./static/css/style.css";
import "./static/css/reset.css";
import "antd/dist/antd.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
