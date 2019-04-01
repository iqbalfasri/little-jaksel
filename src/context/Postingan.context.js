import React, { Component, createContext } from "react";
import { Button, Icon } from "antd";
import axios from "axios";

/** Modal Component */
import Modal from "../components/ModalDialog";

/** Create context */
const JakContext = createContext();
class PostinganProvider extends Component {
  state = {
    contents: [],
    dataIsNull: false,
    visibleModal: false,
    urlAPI: "https://server-nvrsbadqkq.now.sh/"
  };

  componentDidMount() {
    axios
      .get(this.state.urlAPI)
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

  handleModal = e => {
    this.setState({
      visibleModal: true
    });
  };

  handleCancel = e => {
    this.setState({
      visibleModal: false
    });
  };

  handleOk = e => {
    window.location.reload();
  };

  render() {
    return (
      <JakContext.Provider value={{ ...this.state }}>
        {this.props.children}
        <Button
          onClick={this.handleModal}
          className="float-button"
          size="large"
          shape="circle"
          type="primary"
        >
          <Icon type="plus" style={{ fontSize: "14px" }} />
        </Button>
        {/* Modal Dialog */}
        <Modal
          urlAPI={this.state.urlAPI}
          onCancel={this.handleCancel}
          visible={this.state.visibleModal}
        />
      </JakContext.Provider>
    );
  }
}

const PostinganConsumer = JakContext.Consumer;
export { PostinganProvider, PostinganConsumer };
