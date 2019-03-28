import React from "react";
import{ Button, Icon } from 'antd'

// Import Component
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

function Homepage({ dataIsNull, contents }) {
  return (
    <div className="app">
      <Header />
      <Content dataIsNull={dataIsNull} contents={contents} />
      <Footer />
    </div>
  );
}
export default Homepage;
