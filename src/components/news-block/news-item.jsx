import React from 'react';
import { Row, Col } from 'reactstrap';
import { NewsSimpleItem } from './news-simple-item';
import { Link } from '../shared/link/link';

import './news-item.scss';

export function NewsItem({
  imgSrc,
  imgAlt,
  header,
  imgPlaceholder,
  previewText,
  type,
  typeLink,
  date,
  link,
  text,
}) {
  return (
    <Row className={`flex-column news-item ${imgPlaceholder ? 'news-item-large' : ''}`}>
      {header &&
        <Col xs={12}><Link href={link}><p className="preview-text">{header}</p></Link></Col>
      }
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
          text={text}
        />
      </Col>
    </Row>
  );
}

NewsItem.defaultProps = {
  link: '#',
  typeLink: '#',
};
