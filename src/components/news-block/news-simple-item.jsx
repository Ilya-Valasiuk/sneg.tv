import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';

export function NewsSimpleItem({ date, type, text, typeLink, previewText, link }) {
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
              {previewText && <p className={`preview-text ${text ? 'mb-2' : ''}`}>{previewText}</p>}
              {text && <p className="article-text mb-0">{text}</p>}
            </a> :
            <Fragment>{ previewText && <p className="preview-text mb-0">{previewText}</p> }</Fragment>
        }
      </Col>
    </Row >
  );
}

NewsSimpleItem.defaultProps = {
  link: '#',
  typeLink: '#',
};