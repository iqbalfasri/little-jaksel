import React, { useState } from "react";
import { Icon, Tooltip, Button, Empty } from "antd";

const loadingIndicator = <Icon type="loading" style={{ fontSize: 24 }} spin />;

function Content({ contents, dataIsNull }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [perContents, setperContents] = useState(4);
  const [pageNull, setPageNull] = useState(false);

  const handleLoadMore = e => {
    e.preventDefault();

    let page = [];
    for (let i = 0; i <= Math.ceil(contents.length / perContents); i++) {
      page.push(i);
    }

    let totalPage = page.length;
    if (currentPage === totalPage) {
      setPageNull(true);
    }

    /**
     * set page
     */
    setCurrentPage(currentPage + 1);
  };

  /** Pagination */
  const indexOfLastContents = currentPage * perContents;

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
        <Button onClick={handleLoadMore} block type="primary">
          Load more
        </Button>
      </div>
    );
  }
}

export default Content;
