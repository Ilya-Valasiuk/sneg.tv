import React from 'react';
import classnames from 'classnames';
import { Row, Col } from 'reactstrap';

// import './news-item.scss';

export function NewsItemPartner({
  imgSrc,
  imgAlt,
  previewText,
  partnerName,
  partnerLink,
  className,
}) {
  return (
    <Row className={classnames('flex-column news-item', className)} >
      <Col xs={12} className="mb-3">
        <div className="position-relative news-item-image">
          <img src={imgSrc} alt={imgAlt} className="img-fluid w-100 min-h-100" />
        </div>
      </Col>
      <Col xs={12}>
        <p className="partner-preview-text font-weight-900 mb-0">{previewText}</p>
        <a href={partnerLink} className="partner-name text-uppercase">{partnerName}</a>
      </Col>
    </ Row>
  );
}

NewsItemPartner.defaultProps = {
  link: '#',
  partnerLink: '#',
  large: false,
  className: '',
};
