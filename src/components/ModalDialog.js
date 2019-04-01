import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Icon, Input, Modal, Button, message } from "antd";
import TextArea from "antd/lib/input/TextArea";

function ModalDialog({ visible, onCancel, urlAPI }) {
  const [name, setName] = useState("");
  const [urlPict, setUrlPict] = useState("");
  const [urlIg, setUrlIg] = useState("");
  const [urlWeb, setUrlWeb] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [categories, setCategories] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    if (
      name === "" &&
      urlPict === "" &&
      urlIg === "" &&
      urlWeb === "" &&
      deskripsi === ""
    ) {
      return message.warning("Semua form wajib diisi");
    }
    /** Proccess send data to server */
    setLoading(true)
    axios
      .post(urlAPI, {
        title: name,
        description: deskripsi,
        categories: categories,
        url_image: urlPict,
        url_instagram: urlIg,
        url_website: urlWeb
      })
      .then(response => {
        message.success("Berhasil tambah gaan!");
        setTimeout(() => {
          setLoading(false)
          window.location.reload();
        }, 600);
      })
      .catch(error => {
        message.error(error);
      });
  };

  return (
    <Modal
      title="Tambahkan data"
      centered
      visible={visible}
      onOk={handleSubmit}
      onCancel={onCancel}
      footer={[
        <Button type="ghost" onClick={() => onCancel()}>
          Batal
        </Button>,
        <Button
          key="submit"
          loading={loading}
          type="primary"
          onClick={handleSubmit}
        >
          Kirim gan
        </Button>
      ]}
    >
      <Form className="login-form">
        <Form.Item>
          {
            <Input
              required={true}
              onChange={e => setName(e.target.value)}
              size="large"
              prefix={<Icon type="edit" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Masukan nama atau judul"
            />
          }
        </Form.Item>
        <Form.Item>
          {
            <Input
              onChange={e => setUrlPict(e.target.value)}
              size="large"
              prefix={
                <Icon type="picture" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Masukan url gambar"
            />
          }
        </Form.Item>
        <Form.Item>
          {
            <Input
              onChange={e => setUrlIg(e.target.value)}
              size="large"
              prefix={
                <Icon type="instagram" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Masukan url instagram"
            />
          }
        </Form.Item>
        <Form.Item>
          {
            <Input
              onChange={e => setUrlWeb(e.target.value)}
              size="large"
              prefix={
                <Icon type="chrome" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Masukan url website"
            />
          }
        </Form.Item>
        <Form.Item>
          {
            <Input
              onChange={e => setCategories(e.target.value)}
              size="large"
              prefix={
                <Icon type="appstore" style={{ color: "rgba(0,0,0,.25)" }} />
              }
              placeholder="Masukan kategori"
            />
          }
        </Form.Item>
        <Form.Item>
          {
            <TextArea
              onChange={e => setDeskripsi(e.target.value)}
              autosize={{ minRows: 6, maxRows: 6 }}
              placeholder="Masukan deskripsi"
            />
          }
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ModalDialog;
