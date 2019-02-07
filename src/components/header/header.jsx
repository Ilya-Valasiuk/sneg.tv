import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';

import { MenuIcon } from './../icons/menu';
import { CloseIcon } from './../icons/close';
import { SearchIcon } from './../icons/search';
import { SocialIcons } from './../shared/social-icons/social-icons';

import './header.scss';

export class Header extends PureComponent {
  render() {
    const { style, isMenuOpened, isSearchOpened, onMenuToggle, onSearchToggle } = this.props

    return (
      <header className="header" style={style}>
        <Row className="header-main align-items-center pl-3" noGutters>
          <Col className="font-weight-500 ml-1" xs='auto'>Понедельник, 8 ОКТ 2018, 14:58</Col>
          <Col className="font-weight-500 px-2 px-lg-3 pl-lg-4" xs='auto'>
            <span className="text-white">$</span> 65.90 <i className="fas fa-caret-up caret-green" />
          </Col>
          <Col className="font-weight-500 px-2 px-lg-3" xs='auto'>
            <span className="text-white">$</span> 76.31 <i className="fas fa-caret-down caret-red" />
          </Col>
          <Col></Col>
          <SocialIcons />

          <Col xs='auto'>
            <div className="header-hamburger px-3" onClick={onMenuToggle}>
              {isMenuOpened ? <CloseIcon /> : <MenuIcon />}
            </div>
          </Col>
          <Col xs='auto'>
            <div className="header-search px-3" onClick={onSearchToggle}>
              {isSearchOpened ? <CloseIcon /> : <SearchIcon />}
            </div>
          </Col>
        </Row>
        <Row className="header-info"></Row>
      </header >
    );
  }
}
