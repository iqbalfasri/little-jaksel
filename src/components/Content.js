import React, { useState } from "react";
import { Icon, Tooltip, Button, Empty } from "antd";

const loadingIndicator = <Icon type="loading" style={{ fontSize: 24 }} spin />;

function Content({ contents, dataIsNull }) {
  const [visibleContents, setVisibleContents] = useState(2);

  const handleLoadMore = () => {
    setTimeout(() => {
      setVisibleContents(visibleContents + 3);
    }, 1000);
  };

  if (dataIsNull) {
    return <Empty />;
  } else {
    return (
      <div className="container">
        {contents.slice(0, visibleContents).map(content => (
          <div className="list-content">
            <img src={content.url_image} />
            <div className="content">
              <h3>{content.title}</h3>
              <p>{content.description}</p>
              <Tooltip title="Lihat instagram">
                <a href={content.url_instagram} target="_blank">
                  <Icon
                    type="instagram"
                    style={{
                      fontSize: "24px",
                      marginRight: 12,
                      color: "#07080C"
                    }}
                  />
                </a>
              </Tooltip>
              <Tooltip title="Buka websitenya">
                <a href={content.url_website} target="_blank">
                  <Icon
                    type="chrome"
                    style={{
                      fontSize: "24px",
                      marginRight: 12,
                      color: "#07080C"
                    }}
                  />
                </a>
              </Tooltip>
            </div>
          </div>
        ))}
        {visibleContents < contents.length && (
          <Button onClick={handleLoadMore} block type="primary">
            Load more
          </Button>
        )}
      </div>
    );
  }
}

export default Content;
