import React from 'react';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';

import './header.scss';

export function Header({ isMenuOpened, isSearchOpened, onMenuToggle, onSearchToggle }) {
  return (
    <header className="header">
      <Row className="header-main align-items-center pl-3" noGutters>
        <Col xs='auto'>Понедельник, 8 ОКТ 2018, 14:58</Col>
        <Col xs='auto' className="px-3 pl-4">$ 65.90 <i className="fas fa-caret-up caret-green" /></Col>
        <Col xs='auto' className="px-3">$ 76.31 <i className="fas fa-caret-down caret-red" /></Col>
        <Col></Col>
        <Col xs='auto' className="px-1">
          <a href="#" className="header-social-item justify-content-center">
            <i className="fab fa-vk"></i>
          </a>
        </Col>
        <Col xs='auto' className="px-1">
          <a href="#" className="header-social-item justify-content-center">
            <i className="fab fa-facebook-f"></i>
          </a>
        </Col>
        <Col xs='auto' className="px-1">
          <a href="#" className="header-social-item justify-content-center">
            <i className="fab fa-odnoklassniki"></i>
          </a>
        </Col>
        <Col xs='auto' className="px-1">
          <a href="#" className="header-social-item justify-content-center">
            <i className="fab fa-twitter"></i>
          </a>
        </Col>
        <Col xs='auto' className="px-1">
          <a href="#" className="header-social-item justify-content-center">
            <i className="fab fa-viber"></i>
          </a>
        </Col>
        <Col xs='auto' className="px-1">
          <a href="#" className="header-social-item justify-content-center">
            <i className="fab fa-telegram"></i>
          </a>
        </Col>

        <Col xs='auto'>
          <div className="header-hamburger px-3" onClick={onMenuToggle}>
            {isMenuOpened ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </div>
        </Col>
        <Col xs='auto'>
          <div className="header-search px-3" onClick={onSearchToggle}>
            {isSearchOpened ? <i className="fas fa-times"></i> : <i className="fas fa-search"></i>}
          </div>
        </Col>
      </Row>
      <Row className="header-info"></Row>
    </header >
  );
};
