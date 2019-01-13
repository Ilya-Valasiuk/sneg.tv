import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { NewsDateType } from './news-date-type';

export function NewsSimpleItem({ date, type, text, typeLink, previewText, link }) {
  return (
    <Row className="news-simple-item">
      <NewsDateType date={date} type={type} typeLink={typeLink} />
      <Col xs={12}>
        {
          link ?
            <a className="link" href={link} >
              {previewText && <p className={`preview-text font-weight-900 ${text ? 'mb-2' : ''}`}>{previewText}</p>}
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
