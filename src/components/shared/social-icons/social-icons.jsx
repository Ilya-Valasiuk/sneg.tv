import React from 'react';
import classnames from 'classnames';
import { Row, Col } from 'reactstrap';

import './social-icons.scss';

export function SocialIcons({ className, large }) {
  const colClass = large ? 'px-2' : 'px-1';
  return (
    <Row className={classnames('social-icons align-items-center', { large }, className)} noGutters>
      <Col xs='auto' className={colClass}>
        <a href="#" className="social-icons-item justify-content-center">
          <i className="fab fa-vk" />
        </a>
      </Col>
      <Col xs='auto' className={colClass}>
        <a href="#" className="social-icons-item justify-content-center">
          <i className="fab fa-facebook-f"></i>
        </a>
      </Col>
      <Col xs='auto' className={colClass}>
        <a href="#" className="social-icons-item justify-content-center">
          <i className="fab fa-odnoklassniki"></i>
        </a>
      </Col>
      <Col xs='auto' className={colClass}>
        <a href="#" className="social-icons-item justify-content-center">
          <i className="fab fa-twitter"></i>
        </a>
      </Col>
      <Col xs='auto' className={colClass}>
        <a href="#" className="social-icons-item justify-content-center">
          <i className="fab fa-viber"></i>
        </a>
      </Col>
      <Col xs='auto' className={classnames('mr-2', colClass)}>
        <a href="#" className="social-icons-item justify-content-center">
          <i className="fab fa-telegram-plane"></i>
        </a>
      </Col>
    </Row>
  );
}

SocialIcons.defaultProps = {
  large: false,
  className: '',
};
