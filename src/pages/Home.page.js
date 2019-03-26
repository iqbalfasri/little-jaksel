import React, { Component } from "react";
import axios from "axios";

// Import Component
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const data = [
  {
    title: "Ant Design Title 1"
  },
  {
    title: "Ant Design Title 2"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  }
];

class Homepage extends Component {
  state = {
    contents: [],
    dataIsNull: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000")
      .then(response => {
        let { code, data } = response.data;
        /**
         * code: 0
         * adalah kode succes atau datanya ada
         */
        if (code === 0) {
          return this.setState({
            contents: data
          });
        }
        /**
         * setState dataIsnull
         * karena code: 4
         * adalah data kosong
         */
        return this.setState({
          dataIsNull: true
        });
      })
      .catch(error => console.log("Ngga bisa fetch data, maaf banget!"));
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Content
          dataIsNull={this.state.dataIsNull}
          contents={this.state.contents}
        />
        <Footer />
      </div>
    );
  }
}
export default Homepage;
