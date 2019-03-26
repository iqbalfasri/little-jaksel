import React from "react";
import { Icon, Tooltip, Spin, Empty } from "antd";

const loadingIndicator = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const Content = ({ contents, dataIsNull }) => {
  console.log(contents, "data");
  if (dataIsNull) {
    return <Empty />;
  } else {
    return (
      <div className="container">
        {contents.map(content => (
          <div className="list-content">
            <img src={content.url_image} />
            <div className="content">
              <h3>{content.title}</h3>
              <p>{content.description}</p>
              <Tooltip title={content.username_instagram}>
                <a>
                  <Icon
                    type="instagram"
                    style={{ fontSize: "24px", marginRight: 12 }}
                  />
                </a>
              </Tooltip>
              <Tooltip title={content.website}>
                <a>
                  <Icon
                    type="chrome"
                    style={{ fontSize: "24px", marginRight: 12 }}
                  />
                </a>
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Content;
