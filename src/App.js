import React, { Component, Fragment } from "react";

// Import React Router
import { Switch, Route } from "react-router-dom";

// Import Pages
import HomePage from "./pages/Home.page";
import NotfoundPage from "./pages/Notfound.page";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* 404 Page */}
          <Route component={NotfoundPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
