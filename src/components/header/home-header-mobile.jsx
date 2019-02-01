import React from 'react';
import Sticky from 'react-sticky-el';
import { Row, Col } from 'reactstrap';
import { SnowLogo } from '../snow-logo/snow-logo';

import { MenuIcon } from './../icons/menu';
import { NewsFeedIcon } from './../icons/news-feed';
import { CloseIcon } from './../icons/close';

import './header.scss';

export function HomeHeaderMobile({ isMenuOpened, onMenuToggle, isFeedPanelOpened, onFeedPanelToggle }) {
  return (
    <Sticky scrollElement=".snow-col-main" className="header-mobile">
      <header className="header">
        <Row className="justify-content-between" noGutters>
          <Col xs={8} className="px-0">
            <SnowLogo />
          </Col>
          <Col xs="auto" className="d-flex px-0">
            <div className="header-search px-3" onClick={onFeedPanelToggle}>
              {isFeedPanelOpened ? <CloseIcon /> : <NewsFeedIcon />}
            </div>
            <div className="header-hamburger px-3" onClick={onMenuToggle}>
              {isMenuOpened ? <CloseIcon /> : <MenuIcon />}
            </div>
          </Col>
        </Row>
      </header>
    </Sticky>
  );
}