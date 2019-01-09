import React, { Fragment } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { SnowLogo } from '../snow-logo/snow-logo';

export function NewsFeedExpanded({ onToggle, isMenuOpened }) {
  return (
    <Fragment>
      <Row className="news-feed-sticky">
        <Col className="px-0">
          <SnowLogo isShort />
          {!isMenuOpened && <div className="news-feed-add news-feed-add-short d-flex align-items-center justify-content-center rounded-circle"><i className="fas fa-plus"></i></div>}
        </Col>
      </Row>
      <Row className="news-feed-list pt-4">
        <Col className="pointer">
          <div onClick={onToggle}>
            <i className="fas fa-caret-right ml-2"></i>
            <p className="news-feed-title mb-3 pt-2">ЛЕНТА НОВОСТЕЙ</p>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}
