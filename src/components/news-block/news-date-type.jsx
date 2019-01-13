import React from 'react';
import { Col } from 'reactstrap';

export function NewsDateType({ date, type, typeLink, className }) {
  return (
    <Col xs={12} className={`py-2 ${className}`}>
      <span className="date text-uppercase">{date}</span>
      <a href={typeLink} className="type text-uppercase font-weight-500 ml-3">{type}</a>
    </Col>
  );
}

NewsDateType.defaultProps = {
  className: '',
};
