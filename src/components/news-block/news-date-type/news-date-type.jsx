import React from "react";
import classnames from "classnames";
import { Row, Col } from "reactstrap";
import { ArticleBadge } from 'components/article-badge/article-badge';

import "./news-date-type.scss";

export function NewsDateType({ date, type, typeLink, className, subType }) {
  return (
    <Col
      xs={12}
      className={classnames("news-date-type py-2 d-flex", className)}
    >
      <Row>
        <Col xs={12} md={subType ? "" : 12}>
          <span className="date text-uppercase mr-3">{date}</span>
          <a href={typeLink} className="type text-uppercase font-weight-500">
            {type}
          </a>
        </Col>
        {subType ? <Col xs={12} md="auto"><ArticleBadge title={subType} /></Col> : null}
      </Row>
    </Col>
  );
}

NewsDateType.defaultProps = {
  className: "align-items-center"
};
