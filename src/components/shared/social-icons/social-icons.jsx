import React from 'react';
import classnames from 'classnames';
import { Row, Col } from 'reactstrap';

import './social-icons.scss';

export function SocialIcons({ className }) {
  return (
    <Row className={classnames('social-icons align-items-center', className)} noGutters>
      <Col xs='auto' className="px-1">
        <a href="#" className="social-icons-item justify-content-center size-14">
          <i className="fab fa-vk" />
        </a>
      </Col>
      <Col xs='auto' className="px-1">
        <a href="#" className="social-icons-item justify-content-center size-14">
          <i className="fab fa-facebook-f"></i>
        </a>
      </Col>
      <Col xs='auto' className="px-1">
        <a href="#" className="social-icons-item justify-content-center size-14">
          <i className="fab fa-odnoklassniki"></i>
        </a>
      </Col>
      <Col xs='auto' className="px-1">
        <a href="#" className="social-icons-item justify-content-center size-14">
          <i className="fab fa-twitter"></i>
        </a>
      </Col>
      <Col xs='auto' className="px-1">
        <a href="#" className="social-icons-item justify-content-center size-14">
          <i className="fab fa-viber"></i>
        </a>
      </Col>
      <Col xs='auto' className="px-1 mr-2">
        <a href="#" className="social-icons-item justify-content-center size-14">
          <i className="fab fa-telegram-plane"></i>
        </a>
      </Col>
    </Row>
  );
}

SocialIcons.defaultProps = {
  className: '',
};
