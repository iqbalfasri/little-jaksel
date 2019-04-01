import React from "react";
import { Form, Icon, Input, Modal } from "antd";

function ModalDialog({ visible, onOk, onCancle }) {
  return (
    <Modal
      title="Tambahkan data"
      centered
      visible={visible}
      onOk={onOk}
      onCancel={onCancle}
    >
      <Form className="login-form">
        <Form.Item>
          {(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>

      </Form>
    </Modal>
  );
}

export default ModalDialog;
