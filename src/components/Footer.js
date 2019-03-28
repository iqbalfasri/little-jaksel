import React from "react";

const Footer = () => (
  <div
    style={{
      position: "relative",
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: -1,
      marginTop: 50
    }}
  >
    <div
      style={{
        height: "150px",
        overflow: "hidden"
      }}
    >
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style={{ height: "100%", width: "100%" }}
      >
        <path
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style={{ stroke: "none", fill: "#D0E2F8" }}
        />
      </svg>
    </div>
    <div
      style={{
        height: "auto",
        position: "relative",
        bottom: 0,
        padding: "0 0 50px",
        backgroundColor: "#D0E2F8"
      }}
    >
      <div className="container">
        <h5 style={{ fontSize: "22px", fontWeight: "bold", color: "#07080c" }}>
          Tentang
        </h5>
        <p style={{ color: "#07080c", opacity: 0.7, fontSize: "16px" }}>
          Website untuk berbagi macam informasi. Cari kafe, workingspace untuk
          tempat kerja, komunitas yang ada dijakarta selatan, dan usaha atau
          perusahaan rintisan ( Startup ) di daerah jakarta selatan.
          <br />
          <br />
          Website ini saya buat untuk sarana sharing teman-teman yang ada
          didaerah jakarta selatan atau sekitarnya, dan memperkenalkan Daerah
          Jakarta Selatan.
          <br />
          <br />
          Dibuat oleh{" "}
          <a href="https://iqbalfasri.js.org" style={{ color: "#07080c", textDecoration: 'underline' }}>
            Iqbal Fasri
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
