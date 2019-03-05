import React, { PureComponent } from 'react';
import { Row, Col } from 'reactstrap';

import { MenuIcon } from 'components/icons/menu';
import { CloseIcon } from 'components/icons/close';
import { SearchIcon } from 'components/icons/search';
import { UserIcon } from 'components/icons/user';
import { SocialIcons } from 'components/shared/social-icons/social-icons';

import './header.scss';

export class Header extends PureComponent {
  render() {
    const { style, isMenuOpened, isSearchOpened, onMenuToggle, onSearchToggle, toggleLoginView } = this.props

    return (
      <header className="header" style={style}>
        <Row className="header-main align-items-center pl-3" noGutters>
          <Col className="font-weight-500 ml-1" xs='auto'>Понедельник, 8 ОКТ 2018, 14:58</Col>
          <Col className="font-weight-500 px-2 px-lg-3 pl-lg-4 d-md-none d-lg-block" xs='auto'>
            <span className="text-white">$</span> 65.90 <i className="fas fa-caret-up caret-green" />
          </Col>
          <Col className="font-weight-500 px-2 px-lg-3 d-md-none d-lg-block" xs='auto'>
            <span className="text-white">$</span> 76.31 <i className="fas fa-caret-down caret-red" />
          </Col>
          <Col></Col>
          <SocialIcons />

          <Col xs='auto'>
            <div className="header-user px-3" onClick={toggleLoginView}>
              <UserIcon />
            </div>
          </Col>
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
