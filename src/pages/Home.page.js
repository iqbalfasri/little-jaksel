import React from "react";

// Import Component
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

class HomePage extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Content
          dataIsNull={this.props.dataIsNull}
          contents={this.props.contents}
        />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
