import React from 'react';
import { Row, Col } from 'reactstrap';

export function NewsSimpleItem({ date, type, typeLink, previewText, link }) {
  return (
    <Row className="news-simple-item">
      <Col xs={12} className="py-2">
        <span className="date">{date}</span>
        <a href={typeLink} className="type ml-3">{type}</a>
      </Col>
      <Col xs={12}>
        {
          link ?
            <a className="link" href={link} >
              <p className="preview-text mb-0">{previewText}</p>
            </a> :
            <p className="preview-text mb-0">{previewText}</p>
        }
      </Col>
    </Row >
  );
}

NewsSimpleItem.defaultProps = {
  link: '#',
  typeLink: '#',
};
