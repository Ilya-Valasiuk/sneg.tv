import React from "react";
import { Row, Col } from "reactstrap";
import classnames from "classnames";

import "./links.scss";

export function Links({ title, titleClass, items, itemsClass }) {
  return (
    <Row noGutters className="links">
      <Col xs={12} className={classnames("mb-3", titleClass)}>
        <span className="links-title">{title}</span>
      </Col>
      {items.map(({ link, title }) => (
        <Col key={title} xs={12} className={`mb-2 ${itemsClass}`}>
          <a href={link} className="text-white">
            {title}
          </a>
        </Col>
      ))}
    </Row>
  );
}
