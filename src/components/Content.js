import React, { useState } from "react";
import { Icon, Tooltip, Button, Empty, Skeleton } from "antd";

function Content({ contents, dataIsNull }) {
  const [visibleContents, setVisibleContents] = useState(2);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    // setLoading to true
    setLoading(true);
    setTimeout(() => {
      setVisibleContents(visibleContents + 3);
      // setLoading to false
      setLoading(false);
    }, 1000);
  };

  if (contents.length === 0) {
    return (
      <div className="container" style={{ marginBottom: "150px" }}>
        <Skeleton active avatar={{ size: "large" }} paragraph={{ rows: 2 }} />
        <br />
        <Skeleton active avatar paragraph={{ rows: 2 }} />
        <br />
        <Skeleton active avatar paragraph={{ rows: 2 }} />
      </div>
    );
  } else if (dataIsNull) {
    return <Empty />;
  } else {
    return (
      <div className="container">
        {contents.slice(0, visibleContents).map((content, index) => (
          <div key={index} className="list-content">
            <img alt={content.title} src={content.url_image} />
            <div className="content">
              <h3>{content.title}</h3>
              <p>{content.description}</p>
              <Tooltip title="Lihat instagram">
                <a
                  rel="noopener noreferrer"
                  href={content.url_instagram}
                  target="_blank"
                >
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
                <a
                  rel="noopener noreferrer"
                  href={content.url_website}
                  target="_blank"
                >
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
          <Button
            loading={loading}
            onClick={handleLoadMore}
            style={{ margin: "0 auto", display: "block" }}
            type="primary"
          >
            Load more
          </Button>
        )}
      </div>
    );
  }
}

export default Content;
