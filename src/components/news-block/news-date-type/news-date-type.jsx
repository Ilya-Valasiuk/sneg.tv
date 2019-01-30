import React from 'react';
import classnames from 'classnames'
import { Col } from 'reactstrap';

import './news-date-type.scss';

export function NewsDateType({ date, type, typeLink, className }) {
  return (
    <Col xs={12} className={classnames('news-date-type py-2 d-flex', className)}>
      <span className="date text-uppercase mr-3">{date}</span>
      <a href={typeLink} className="type text-uppercase font-weight-500">{type}</a>
    </Col>
  );
}

NewsDateType.defaultProps = {
  className: 'align-items-center',
};
