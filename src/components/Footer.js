import React from "react";

const Footer = () => (
  <div
    style={{
      position: "fixed",
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: -1
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
          style={{ stroke: "none", fill: "#EAF2FD" }}
        />
      </svg>
    </div>
    <div
      style={{
        height: "50px",
        position: "relative",
        bottom: 0,
        backgroundColor: "#EAF2FD"
      }}
    />
  </div>
);

export default Footer;
