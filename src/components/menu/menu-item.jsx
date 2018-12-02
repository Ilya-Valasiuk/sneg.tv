import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from './../shared/link/link';

export function MenuItem({ date, type, text, typeLink, previewText, link }) {
  return (
    <Row className="menu-item">
      <Col xs={12} className="py-2">
        <span className="date">{date}</span>
        <Link href={typeLink} className="type ml-3">{type}</Link>
      </Col>
      <Col xs={12} className="menu-item-info">
        {
          link ?
            <Link className="text-white" href={link} >
              {previewText && <p className={`preview-text ${text ? 'mb-2' : ''}`}>{previewText}</p>}
              {text && <p className="article-text mb-0">{text}</p>}
            </Link> :
            <Fragment>{previewText && <p className="preview-text mb-0">{previewText}</p>}</Fragment>
        }
      </Col>
    </Row >
  );
}

MenuItem.defaultProps = {
  link: '#',
  typeLink: '#',
};
