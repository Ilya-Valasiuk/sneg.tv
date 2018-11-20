import React from 'react';
import { Row, Col } from 'reactstrap';

import './news-item.css';
import { NewsSimpleItem } from './news-simple-item';

export function NewsItem({
  imgSrc,
  imgAlt,
  imgPlaceholder,
  previewText,
  type,
  typeLink,
  date,
  link,
}) {
  return (
    <Row className={`flex-column news-item ${imgPlaceholder ? 'news-item-large' : ''}`}>
      <Col xs={12}>
        <div className="position-relative">
          <img src={imgSrc} alt={imgAlt} className="img-fluid" />
          {imgPlaceholder && <span className="position-absolute placeholder">{imgPlaceholder}</span>}
        </div>
      </Col>
      <Col xs={12}>
        <NewsSimpleItem
          type={type}
          typeLink={typeLink}
          date={date}
          link={link}
          previewText={previewText}
        />
      </Col>
    </Row>
  );
}

NewsItem.defaultProps = {
  link: '#',
  typeLink: '#',
};
