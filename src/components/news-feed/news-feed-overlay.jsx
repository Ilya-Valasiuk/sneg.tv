import React, { Fragment } from 'react';
import classnames from 'classnames';
import { Row, Col } from 'reactstrap';
import { SnowLogo } from '../snow-logo/snow-logo';

export function NewsFeedOverlay({ isMenuOpened, isShort, isSearch }) {
  console.log(isShort, isMenuOpened);
  return (
    <Fragment>
      <Row noGutters={isSearch}>
        <Col className="px-0">
          <SnowLogo isShort={isShort} />
          {(!isShort && !isMenuOpened) && <div class="news-feed-add d-flex align-items-center justify-content-center rounded-circle"><i class="fas fa-plus"></i></div>}
        </Col>
      </Row>
      <Row noGutters={isSearch}>
        <Col className={classnames({ 'menu-overlay': !isSearch }, { 'search-overlay': isSearch })}></Col>
      </Row>
    </Fragment>
  );
}

NewsFeedOverlay.defaultProps = {
  isSearch: false,
}