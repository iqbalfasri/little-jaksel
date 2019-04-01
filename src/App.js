import React, { Component } from "react";

// Import React Router
import { Switch, Route } from "react-router-dom";

// Import Pages
import HomePage from "./pages/Home.page";
import NotfoundPage from "./pages/Notfound.page";

// Import Context
import {
  PostinganProvider,
  PostinganConsumer
} from "./context/Postingan.context";

class App extends Component {
  render() {
    return (
      <PostinganProvider>
        <PostinganConsumer>
          {ctx => {
            return (
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <HomePage
                      contents={ctx.contents}
                      dataIsNull={ctx.dataIsNull}
                    />
                  )}
                />
                {/* 404 Page */}
                <Route component={NotfoundPage} />
              </Switch>
            );
          }}
        </PostinganConsumer>
      </PostinganProvider>
    );
  }
}

export default App;
