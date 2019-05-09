import React from 'react';
import { Row, Col } from 'reactstrap';
import { Link as RouterLink } from "react-router-dom";
import { NewsSimpleItem } from './../news-simple-item/news-simple-item';

import './news-item-main.scss';

export function NewsItemMain({
  imgSrc,
  imgAlt,
  imgPlaceholder,
  previewText,
  type,
  typeLink,
  date,
  link,
  text,
}) {
  return (
    <Row tag={RouterLink} to={link} className="flex-column news-item-main news-item-large">
      <Col xs={12}>
        <div className="position-relative">
          <img src={imgSrc} alt={imgAlt} className="img-fluid" />
          <span className="position-absolute font-weight-900 text-white placeholder">{imgPlaceholder}</span>
        </div>
      </Col>
      <Col xs={12}>
        <NewsSimpleItem
          type={type}
          typeLink={typeLink}
          date={date}
          link={null}
          previewText={previewText}
          text={text}
        />
      </Col>
    </Row>
  );
}

NewsItemMain.defaultProps = {
  link: '/inner',
  typeLink: '#',
  large: false,
  withoutLink: false,
};
